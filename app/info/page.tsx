import { PhoneButton } from "@/components/common/PhoneButton";
import { ExternalLinkButton } from "@/components/common/ExternalLinkButton";

const sections = [
  {
    emoji: "✈️",
    title: "공항 안내",
    content: "인천공항 별도 미팅 없습니다. 미리 전달 드린 이티켓 지참 부탁드리며, 항공 출발 3시간 전까지 공항에 도착하셔서 개별 수속 부탁드리겠습니다.",
  },
  {
    emoji: "🙋",
    title: "가이드 미팅",
    content: "가이드: 지홍창 (池洪沧, CHI HONGCANG)\n연락처: 15821391622\n\n미팅 장소: 상해 푸동공항 입국장 통과 후\n하나투어 미팅 피켓 [ Art Friends ] 앞",
  },
  {
    emoji: "🏨",
    title: "확정 호텔",
    content: "Regal Jinfeng Hotel\n· 트윈룸 7개 / 싱글룸 8개",
  },
  {
    emoji: "📋",
    title: "온라인 입국신고서",
    content: "2025년 11월 26일부터 중국에 입국하는 모든 외국인 여행객은 온라인 입국신고서를 의무적으로 작성해야 합니다.\n\n⚠️ 미작성 시 중국 입국이 불가합니다.\n\n■ 입국 시 제출 방법\n1) 작성 후 생성된 QR코드 캡쳐 또는 PDF 파일로 저장\n2) 생성된 QR코드는 이메일 발송 및 스캔 가능\n※ 프린트하는 경우 인식 불가될 수 있음\n\n★★ 한국 출국 전 QR코드 저장 필수 ★★",
  },
  {
    emoji: "💴",
    title: "환전",
    content: "· 기사·가이드 경비 40달러는 미국 달러로 준비해 주세요. (카드 결제 불가. 한화 지불 가능하나 당일 환율 적용)\n\n· 중국 현지 상점에서는 외국 발행 비자·마스터카드 사용이 제한적입니다. 현금(위안화)을 기본 결제 수단으로 준비하시고, 알리페이·위챗페이 사전 카드 등록을 권장드립니다.\n\n· 현금이 부족하실 경우 가이드에게 소량 환전 가능합니다.",
  },
  {
    emoji: "🗺️",
    title: "지도 앱",
    content: "중국에서는 구글맵이 정상적으로 작동하지 않습니다. 현지 지도 앱인 고덕지도(AMAP, 高德地图)를 미리 다운로드해 두세요.\n\n· 한국 출국 전 설치 권장\n· App Store / Google Play에서 'AMAP' 또는 '高德地图' 검색",
  },
  {
    emoji: "📱",
    title: "유심/로밍",
    content: "중국 내 인터넷은 제한적입니다.\n\n· VPN 없는 eSIM/유심 또는 한국 출발 전 로밍 신청 필수!\n· 일반 와이파이 연결 시 카카오톡·네이버·구글 접속 불가\n· VPN 앱은 입국 전 미리 설치해 두세요 (입국 후 설치 불가)",
  },
  {
    emoji: "🧳",
    title: "수하물 규정",
    content: "중국남방항공 일반석 기준\n\n· 기내수하물: 8kg / 1개 / 1인 (삼면의 합 115cm 이내)\n· 위탁수하물: 23kg / 1개 / 1인\n\n기내 반입 불가 → 위탁수하물로:\nㄴ 100ml 초과 액체·크림·젤류 (음료, 샴푸, 로션, 치약, 헤어젤, 고추장 등)\nㄴ 날카로운 물건 (가위, 눈썹칼, 손톱깎이 등)\n\n* 액체류 100ml 이하만 기내 반입 가능 (총 1L 지퍼백)\n* 휴대폰·노트북·보조배터리·전자담배·라이터는 기내 휴대 필수\n* 귀중품은 위탁수하물에 넣지 마세요.",
  },
  {
    emoji: "🛡️",
    title: "여행자보험",
    content: "여행자보험은 투어 비용에 포함되어 있습니다. 별도 가입하실 필요 없습니다.",
  },
  {
    emoji: "🔐",
    title: "귀중품 보관",
    content: "여권은 항상 안전하게 보관하세요. 호텔 룸 세이프(금고)나 프런트에 맡기는 것을 권장합니다. 분실 시 대사관 연락처: 주중 한국대사관 +86-10-8532-0290",
  },
  {
    emoji: "👕",
    title: "옷차림",
    content: "7월 상하이는 무덥고 습한 날씨입니다. 낮에는 32~35°C까지 올라갈 수 있으며 자외선이 강합니다. 가볍고 통기성 좋은 옷차림을 권장하며, 선크림과 선글라스를 꼭 챙기세요. 미술관 내부는 냉방이 강할 수 있으니 얇은 겉옷 하나 준비하시면 좋습니다. 편한 신발 필수입니다.",
  },
  {
    emoji: "🍽️",
    title: "식사",
    content: "1일차: 석식 포함\n2일차: 중식 불포함 (Roof PM, 예약은 해둠), 석식 포함\n3일차: 중식·석식 포함\n4일차: 중식 포함\n\n알레르기나 식사 제한이 있으신 분은 사전에 인솔자에게 알려주세요.",
  },
  {
    emoji: "📞",
    title: "비상연락처",
    content: "인솔자 티아라: 010-3128-1581\n가이드 지홍창: 15821391622\n주중 한국대사관: +86-10-8532-0290\n상하이 긴급: 110(경찰) / 119(소방·구급) / 120(응급)",
  },
];

export default function InfoPage() {
  return (
    <div className="space-y-4 px-4 py-6">
      <h1 className="text-2xl font-bold">여행 정보</h1>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
        <h2 className="text-lg font-bold">📞 연락처</h2>
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

      <div className="space-y-3">
        {sections.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-2">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <span>{s.emoji}</span>
              {s.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">{s.content}</p>
            {s.title === "온라인 입국신고서" && (
              <a
                href="https://cafe.naver.com/amateurmagician/79559"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 underline block"
              >
                자세히 보기 →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
