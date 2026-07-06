import { PhoneButton } from "@/components/common/PhoneButton";
import { ExternalLinkButton } from "@/components/common/ExternalLinkButton";

export function ContactCTA() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
      <h2 className="text-lg font-bold">연락처</h2>
      <p className="text-sm text-neutral-600">궁금하신 사항은 아래로 연락해 주세요.</p>
      <div className="flex flex-col gap-3">
        <PhoneButton phone="010-3128-1581" label="인솔자 티아라" />
        <ExternalLinkButton href="http://pf.kakao.com/_gIxlNb/chat" label="카카오채널 아트프렌즈" />
      </div>
      <a
        href="https://msstour.hanatour.com/trp/pkg/CHPC0PKG0200M100?pkgCd=CCQ110260710CZL"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-400 underline block text-center"
      >
        하나투어 예약 CCQ110260710CZL
      </a>
    </div>
  );
}
