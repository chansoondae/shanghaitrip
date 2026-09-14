"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";

interface Props {
  time: string;
  name: string;
  description: string;
  address?: string;
  imagePath?: string;
  mapsUrl?: string;
  isLast: boolean;
}

function getYoutubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/watch\?v=([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function YoutubeEmbed({ id }: { id: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden my-2">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export function TimelineItem({ time, name, description, address, imagePath, mapsUrl, isLast }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#ff6b35] mt-1 shrink-0" />
        {!isLast && <div className="w-0.5 bg-neutral-200 flex-1 mt-1" />}
      </div>
      <div className={`pb-6 flex-1 ${isLast ? "pb-0" : ""}`}>
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
          {time}
        </span>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100">
          {imagePath && !imgError && (
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={imagePath}
                alt={name}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            </div>
          )}
          <div className="p-4 space-y-3">
            <h3 className="font-bold text-base">📍 {name}</h3>
            <div className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
              {description.split(/(\*\*.*?\*\*|https?:\/\/[^\s]+)/).map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={i}>{part.slice(2, -2)}</strong>;
                }
                if (/^https?:\/\//.test(part)) {
                  const ytId = getYoutubeId(part);
                  if (ytId) return <YoutubeEmbed key={i} id={ytId} />;
                  return (
                    <a
                      key={i}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline break-all"
                    >
                      {part}
                    </a>
                  );
                }
                return part;
              })}
            </div>
            {address && (
              <div className="flex items-start gap-1.5 text-xs text-neutral-400">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
            )}
            {mapsUrl && <GoogleMapsButton url={mapsUrl} />}
          </div>
        </div>
      </div>
    </div>
  );
}
