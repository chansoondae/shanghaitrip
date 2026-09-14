import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { FontSizeProvider } from "@/components/FontSizeProvider";

const SITE_TITLE = "채수한 가이드 x 에이미님과 함께 상하이 아트 투어";
const SITE_DESCRIPTION =
  "2026.09.17~09.20 3박4일 몽트래블 상하이·쑤저우 아트 투어. 자코메티(민생현대미술관), 모란디(푸동 미술관), 피카소(쑤저우 현대미술관) 3대 거장 특별전을 한 번에 만나는 여정.";
const OG_IMAGE = "/images/spot-2-8.jpg";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✈️</text></svg>",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "상하이 와이탄 야경" }],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <FontSizeProvider>
          <div className="max-w-lg mx-auto w-full relative">
            <TopBar />
            <main className="flex-1 pb-20 pt-14">
              {children}
            </main>
            <BottomNav />
          </div>
        </FontSizeProvider>
      </body>
    </html>
  );
}
