import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";

interface Props {
  name: string;
  mapsUrl: string;
  address?: string;
  phone?: string;
}

export function HotelCard({ name, mapsUrl, address, phone }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
      <h3 className="font-bold text-base">🏨 숙소</h3>
      <p className="text-sm font-medium">{name}</p>
      {address && <p className="text-xs text-neutral-500">{address}</p>}
      {phone && (
        <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-xs text-neutral-500 block">
          📞 {phone}
        </a>
      )}
      <GoogleMapsButton url={mapsUrl} label="호텔 위치 보기" />
    </div>
  );
}
