import { notFound } from "next/navigation";
import { DayHeader } from "@/components/day/DayHeader";
import { TransportBadge } from "@/components/day/TransportBadge";
import { TimelineItem } from "@/components/day/TimelineItem";
import { MealInfo } from "@/components/day/MealInfo";
import { HotelCard } from "@/components/day/HotelCard";

const HOTEL_NAME = "Regal Jinfeng Hotel (리걸 진펑 호텔)";
const HOTEL_MAPS = "https://www.google.com/maps/search/?api=1&query=318+Jingang+Road+Pudong+District+Shanghai";

const dayData: Record<number, {
  dayNumber: number;
  date: string;
  weekday: string;
  region: string;
  transport: string;
  summary: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  accommodation: string;
  hotelMapsUrl: string;
  spots: {
    time: string;
    name: string;
    description: string;
    address?: string;
    imagePath?: string;
    mapsUrl?: string;
  }[];
}> = {
  1: {
    dayNumber: 1,
    date: "8월 22일",
    weekday: "토요일",
    region: "상하이",
    transport: "CZ314  ICN → PVG  12:35 → 13:45",
    summary: "인천 출발 → 민생현대미술관 (자코메티) → 점도덕 딤섬 → EKA (천안우)",
    breakfast: "불포함",
    lunch: "기내식",
    dinner: "점도덕 딤섬 (포함)",
    accommodation: HOTEL_NAME,
    hotelMapsUrl: HOTEL_MAPS,
    spots: [
      {
        time: "12:35",
        name: "인천공항 출발 (중국남방항공 CZ314)",
        description: "✈️ 중국남방항공 CZ314  ICN → PVG  12:35 → 13:45\n\n비행 약 2시간 10분 소요, 기내식(중식) 제공. 상하이 푸동국제공항 도착 후 입국 수속을 마치고 이동합니다.",
        address: "Incheon International Airport, Incheon",
        imagePath: "/images/spot-1-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Incheon+International+Airport",
      },
      {
        time: "13:45",
        name: "상해 푸동공항 도착 · 가이드 미팅",
        description: "🙋 상해 푸동공항 입국장 통과 후 하나투어 미팅 피켓 [ Art Friends ] 앞에서 가이드와 미팅합니다.\n\n가이드: 지홍창 (池洪沧, CHI HONGCANG)\n연락처: 15821391622",
        address: "Shanghai Pudong International Airport, Shanghai",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shanghai+Pudong+International+Airport",
      },
      {
        time: "오후",
        name: "민생현대미술관 · 자코메티 예술 대전",
        description: "🎨 **《塑我此生：贾科梅蒂艺术大展》**\n(스뤄츠성: 자코메티 예술 대전)\n\n📅 전시 기간: ~ 2026년 12월 6일\n📍 상하이 민생현대미술관 (民生现代美术馆) 5·6층\n중국 민생은행이 설립한 사립 현대미술 기관으로, 은행 건물 5·6층에 위치합니다.\n\n🖼️ **전시 개요**\n알베르토 자코메티(Alberto Giacometti, 1901–1966) 서거 60주년을 기념하는 대형 전시이자 '2026 중불 문화의 봄' 핵심 프로젝트입니다. 프랑스 자코메티 재단(Fondation Giacometti) 소장품 중 조각·유화·드로잉·아카이브 자료 등 **총 212점의 원작**을 **13개 테마**로 나누어 소개합니다.\n\n🗺️ **작가의 여정 (전시 흐름)**\n· 스위스 브레갈리아(Bregaglia) 계곡에서의 어린 시절 깨달음\n· 1920년대 파리에서의 아방가르드 예술 경험\n· 1930년대 장식 미술품 제작 및 초현실주의적 활동\n· 모델을 소재로 한 작품 활동으로의 점진적 복귀\n· 제2차 세계 대전 전후 스위스에서의 힘겨운 방황\n· 전후 파리 몽파르나스 23㎡ 작업실에서 완성된 독자적 스타일\n\n✨ **꼭 봐야 할 대표작**\n\n💜 **Tall Woman (1960) — 약 2.7m**\n1층에서 관람객을 압도하는 거대한 작품. 원래 뉴욕 체이스 맨해튼 은행 광장에 설치될 예정이었으나 자코메티가 결과에 만족하지 못해 납품하지 않은 프로젝트입니다. 1961년부터 '큰 여성', '거대한 머리', '걷는 남자'를 개별 청동으로 주조해 전시하기 시작했습니다. 극단적으로 늘여진 신체가 좁은 좌대 위에 위태롭게 서 있으며, 인물 형태는 주변 빈 공간과 대비되어 날카로운 실루엣으로 축소됩니다.\n\n💜 **The Nose (1947)**\n6층 전시장 입구. 새장 같은 구조물 안에 매달려 기이하게 긴 코를 드러낸 초현실주의적 실험작.\n\n💜 **Self-Portrait (1918)**\n전시장 정면 첫 작품. 조각가로 잘 알려진 자코메티가 17세 전후 청년 시절 강렬한 색채와 붓 터치로 자신을 그린 전설적 유화.\n\n💜 **23㎡의 전설적 아틀리에 재현 섹션**\n전쟁 후 파리 몽파르나스로 돌아와 평생을 보낸 낡고 비좁은 작업실을 재해석한 공간. 사방에 부서진 석고와 먼지가 가득했던 이 방에서 거장 고유의 스타일이 완성되었습니다.\n\n💜 **Walking Man (1960)**\n가늘고 길게 늘어진 형상으로 인간의 고독한 걸음과 흔들리지 않는 실존을 표현한 자코메티 최고의 대표작.\n\n💜 **영혼의 응시와 마지막 초상 (幽微而磅礴的生命现场)**\n만년에 아내 아네트(Annette), 연인 캐롤린(Caroline), 철학자 친구들을 모델로 그린 회화와 두상 조각. 생명의 핵심을 '눈빛과 시선'에 담아낸 거장의 유산으로 전시가 마무리됩니다.\n\n🛍️ **5층 편의시설**\n티켓 발권 · 카페 · 굿즈샵 · 보관함\n· 전시 한정판 도록, 에코백, 문구류 등 굿즈 풍부\n· 카페 커피 맛 양호 — 한 잔 추천\n\n📸 티켓·에코백 인증샷도 잊지 마세요.",
        address: "Minsheng Art Museum, Shanghai",
        imagePath: "/images/spot-1-5.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Minsheng+Art+Museum+Shanghai",
      },
      {
        time: "저녁",
        name: "점도덕 (点都德) — 광둥식 딤섬 ⭐⭐⭐",
        description: "🥟 **점도덕 (点都德 Dim Dim Sum)**\n\n1933년 광저우(广州)에서 시작된 **정통 광둥식 딤섬(粵式點心)** 브랜드입니다. 오랜 역사의 노포이면서 젊은 세대 감각의 매장 디자인으로 재해석해 광저우·상하이·베이징 등지에서 웨이팅이 끊이지 않는 인기 체인입니다.\n\n🏮 **꼭 먹어봐야 할 시그니처**\n· ⭐ **红米肠粉 (홍미창펀)** — 점도덕의 대표 시그니처. **붉은 쌀(红米)**로 반죽한 창펀 피가 은은한 분홍빛을 띠며 쫀득한 식감이 일품. 안에는 새우가 통으로 들어감. **꼭 주문!**\n· **蝦餃 (하가우, 샤자오)** — 반투명 껍질이 얇게 비치는 새우 딤섬. 광둥 딤섬의 왕도\n· **叉燒包 (차슈바오)** — 달콤짭짤한 차슈가 든 갈라진 만두. 폭신폭신한 표면이 트레이드마크\n· **流沙包 (류샤바오)** — 커스터드 소금 노른자가 흘러나오는 디저트 만두\n· **鳳爪 (펑좌)** — 부드럽게 쪄낸 닭발, 딤섬 필수\n· **蛋撻 (에그타르트)** — 겉바속촉의 광둥식 에그타르트\n· **糯米雞 (누오미지)** — 연잎에 싼 찹쌀 닭고기 찜\n\n💡 상하이식 샤오롱바오(小笼包)는 강남 계열이라 점도덕의 시그니처는 아닙니다. **홍미창펀·하가우·류샤바오** 위주로 주문하시는 걸 추천합니다.\n\n석식 포함 (점도덕)",
        address: "Shanghai, China",
        imagePath: "/images/spot-2-4.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E7%82%B9%E9%83%BD%E5%BE%B7+Shanghai",
      },
      {
        time: "저녁",
        name: "EKA (천안우)",
        description: "🏭 EKA·天物 (EKA 천안우)\n\n옛 조선소를 개조하여 예술과 라이프스타일이 어우러진 개방형 복합 문화·상업 거리입니다. 1869년 청나라 시절 세관 공장으로 시작해 상하이 해양계기 공장으로 쓰이던 부지를 재생한 공간으로, 100에이커 부지 위에 40여 개 건물이 30가지 이상의 건축 양식으로 재탄생해 '야외 건축 박물관'이라 불립니다.\n\n· 산업 유산(붉은 벽돌·콘크리트·오래된 나무)을 그대로 보존\n· 갤러리·팝업 마켓·카페·레스토랑·편집숍 등 밀집\n· EKA = Exploration · Knowledge · Aesthetics\n· 운영시간: 10:00 ~ 02:00",
        address: "535 Jinqiao Rd, Pudong New Area, Shanghai",
        imagePath: "/images/spot-2-6.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=EKA+Tianwu+535+Jinqiao+Road+Pudong+Shanghai",
      },
    ],
  },
  2: {
    dayNumber: 2,
    date: "8월 23일",
    weekday: "일요일",
    region: "상하이",
    transport: "🚌 이동",
    summary: "푸동 미술관 → Roof PM 점심 → M50 → 초강남 사천요리 → 상해 옛거리 · 와이탄 야경",
    breakfast: "호텔식",
    lunch: "ROOF PM (예약 요청, 포함)",
    dinner: "초강남 사천요리 (포함)",
    accommodation: HOTEL_NAME,
    hotelMapsUrl: HOTEL_MAPS,
    spots: [
      {
        time: "10:00",
        name: "푸동 미술관 (Museum of Art Pudong)",
        description: "🏛️ **푸동 미술관 (Museum of Art Pudong, MAP)**\n\n프랑스 건축가 장 누벨(Jean Nouvel)이 설계한 상하이 푸동 신구의 랜드마크 미술관. 2026년 두 개의 대형 특별전이 동시에 열립니다.\n\n━━━━━━━━━━━━━━━\n\n🎨 **조르조 모란디: Solo**\n**Giorgio Morandi. Solo**\n📅 2026년 6월 17일 개막\n\n**작가 소개**\n조르조 모란디(Giorgio Morandi, 1890–1964)는 20세기 이탈리아 회화의 가장 영향력 있는 화가 중 한 명입니다. 그의 이름은 하나의 색채 시스템 — **'모란디 컬러(Morandi colors)'** — 의 대명사가 되었습니다. 낮은 채도와 고요하고 균형 잡힌 색조는 중국 대중문화에서 폭발적 인기를 얻으며 '세계에서 가장 세련된 색채 미학'으로 평가받습니다.\n\n그는 고향 볼로냐(Bologna)를 거의 떠나지 않고 은둔 생활을 했습니다. 초기에는 아방가르드와 형이상학 회화(Metaphysical painting)에 참여했으나, 결국 자신의 미학적 입장을 고수하며 **병·꽃·창밖 풍경**이라는 제한된 소재에서 무한한 변주를 만들어냈습니다.\n\n**전시 개요**\n금세기 전 세계에서 열린 **모란디 개인전 중 최대 규모**. 30여 개 국제 기관·컬렉터로부터 200점 이상을 모았으며, 이 중 **모란디 원작 140점 이상**, **약 120점은 중국 초공개**입니다.\n\n· 30개 이상 서브섹션으로 구성\n· '병·주전자 화가'라는 단순한 규정을 넘어 정물·풍경·꽃·자화상까지 다양한 소재\n· 유화·판화·수채화 등 매체 총망라\n· 작업실 사진 50점 이상, 실제 사용한 오브제(같은 소재 회화와 나란히 전시), 개인 장서·서신·아카이브 자료\n· 현대미술가 **타시타 딘(Tacita Dean)의 영상 설치 2점** — 모란디의 지속적 영향력 조명\n\n**하이라이트**\n· 평생 7점만 그린 **자화상 중 1점**\n· 여동생을 그린 **미공개 초상화**\n· 12점밖에 없는 **형이상학 회화 중 1점**\n· 극히 희귀한 **전시(戰時) 조개 회화·수채화**\n· 모란디가 사용한 **개인 스타 인쇄기(star press)** — 1993년 이후 처음으로 볼로냐를 떠남\n\n**전시명 'Solo'의 의미**\n관람객이 작품 앞에서 경험하는 심리적 감각에서 유래한 개념이자, 음악 용어 '솔로' — 하나의 목소리가 무대 전체를 홀로 이끄는 정점의 순간을 차용. 최소한의 요소와 색으로 응축된 시각적 솔로를 관객에게 전달합니다.\n\n**주최·기획**\n· 제작: Shanghai Lujiazui East Bund Culture Development Co., Ltd.\n· 주관: Museum of Art Pudong × Museo Morandi\n· 큐레이터: Lorenzo Balbi (Museo Morandi 관장), Francesco D'Arelli (상하이 이탈리아 문화원장)\n· 전시 디자인: **Aldo Cibic Workshop**\n· 후원: 주상하이 이탈리아 총영사관, 상하이 이탈리아 문화원, 볼로냐시\n\n━━━━━━━━━━━━━━━\n\n🏛️ **장 누벨 특별전 (Jean Nouvel)**\n\n미술관 그 자체가 '**하얀 상자(white box)**'로서 하나의 완결된 작품인 이 공간에서, **장 누벨이 자신이 설계한 미술관 안에서 처음으로 여는 개인전**입니다.\n\n**대표 문화 프로젝트 4선** (모형·아카이브 자료)\n· **Philharmonie de Paris** (파리 필하모니)\n· **National Museum of Qatar** (카타르 국립박물관, 도하)\n· **Museum of Art Pudong** (푸동 미술관, 이 건물)\n· **Fondation Cartier pour l'art contemporain — Palais-Royal** (팔레 루아얄 카르티에 재단)\n\n**전시 구성**\n· 그의 커리어에서 **100건 이상의 산업 디자인 프로젝트**를 최초로 한자리에 공개\n· 대형 무빙 이미지 — 건축의 감각적 차원을 드러냄\n· 대형 스크린 — 도면·모형을 넘어 몰입형 관람 경험 제공\n· **Ateliers Jean Nouvel 작업실 재현 공간** — 16대의 컴퓨터 스테이션에서 400개 이상의 건축 프로젝트, 100건 이상의 디자인 아카이브 열람 가능 (완성작 + 미실현 안·제안)\n\n**주최·기획**\n· 제작: Shanghai Lujiazui East Bund Culture Development Co., Ltd.\n· 주관: Museum of Art Pudong × Ateliers Jean Nouvel\n· 후원: 주상하이 프랑스 총영사관, Institut français de Chine\n· 2026 Croisements Festival 공식 포함\n\n💡 두 전시 모두 3,000㎡ 규모의 전시 공간을 소규모 룸으로 세분화한 형태 — 관람 시간 넉넉히 확보 권장.",
        address: "2777 Binjiang Ave, Pudong New Area, Shanghai",
        imagePath: "/images/spot-2-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pudong+Art+Museum+Shanghai",
      },
      {
        time: "12:00",
        name: "Roof PM (점심)",
        description: "🍽️ Roof PM 런치 스페셜 세트 — 188위안/인\n\n· 데일리 셰프 샐러드 또는 데일리 수프 포함\n· 음료 포함: 아메리카노 (Hot/Ice), 레몬티 (Hot), 콜라, 스프라이트, 소다\n\n✅ 메인 선택 (Choice of Main)\n🍝 **클래식 라구 볼로네제 페투치네 파스타** Classic Ragout Bolognese Fettuccine Pasta ⭐\n🍗 **허브 구운 뼈없는 닭다리** Grilled Herbed Boneless Chicken Leg ⭐\n🦆 **오리 콩피** Duck Leg Confit ⭐\n🐙 **그릴 문어** Grilled Ocean Octopus (+20위안) ⭐\n🐑 **뉴질랜드 양갈비** Irish Lamb Rack 2pc (+20위안)\n🐟 **구운 연어** Grilled Salmon\n\n⭐ 인기 메뉴: 볼로네제 파스타, 닭다리, 오리 콩피, 구운 문어\n❌ 비추천: 양갈비, 연어",
        imagePath: "/images/spot-2-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Roof+PM+Shanghai",
      },
      {
        time: "14:00",
        name: "M50 창의원구",
        description: "🎨 M50 창의원구\n\n상하이의 대표적인 예술 특구 M50을 방문합니다. 옛 방직 공장을 개조한 공간으로, 갤러리와 스튜디오가 밀집해 있어 중국 현대 미술을 한눈에 감상할 수 있습니다.",
        address: "50 Moganshan Rd, Putuo District, Shanghai",
        imagePath: "/images/spot-1-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=M50+Creative+Park+Shanghai",
      },
      {
        time: "17:00",
        name: "초강남 (超江南) — 사천요리 전문점",
        description: "🌶️ 초강남 (超江南)\n\n상하이의 인기 사천요리(川菜) 전문점에서 저녁 식사를 즐깁니다. 마파두부·수이주위(水煮鱼)·궁보계정 등 정통 사천의 마라(麻辣) 풍미를 만끽할 수 있습니다.\n\n석식 포함 (초강남 사천요리)",
        address: "Shanghai, China",
        imagePath: "/images/spot-2-7.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E8%B6%85%E6%B1%9F%E5%8D%97+Shanghai",
      },
      {
        time: "18:00",
        name: "상해 옛거리",
        description: "🏮 상해 옛거리 (上海老街 / 方浜中路 Fangbang Middle Road)\n\n명·청대 양식의 건축이 약 825m에 걸쳐 이어지는 상하이 구시가지의 핵심 거리입니다. 서쪽은 전통 공예품·골동품 상점, 동쪽 끝은 예원(豫园)·성황묘(城隍庙) 상권과 연결됩니다.\n\n🍜 꼭 먹어봐야 할 것들\n· 샤오롱바오(小笼包)\n· 생젠바오(生煎包) — 바닥이 바삭한 팬프라이드 고기만두\n· 취두부(臭豆腐) — 발효 두부 튀김\n· 탕후루(糖葫芦) — 과일 꼬치 사탕\n\n📍 저녁 무렵 홍등이 켜지면 분위기가 절정 — 사진 명소",
        address: "Old Street, Huangpu District, Shanghai",
        imagePath: "/images/spot-3-6.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shanghai+Old+Street+Fangbang+Zhonglu",
      },
      {
        time: "19:30",
        name: "와이탄 야경",
        description: "🌆 상하이의 상징 와이탄에서 황푸강 너머 푸동 스카이라인의 화려한 야경을 감상합니다. 동방명주 타워, 상하이 타워 등 마천루들이 만들어내는 야경이 압권입니다.",
        address: "Zhongshan E 2nd Rd, Huangpu District, Shanghai",
        imagePath: "/images/spot-2-8.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Bund+Shanghai",
      },
    ],
  },
  3: {
    dayNumber: 3,
    date: "8월 24일",
    weekday: "월요일",
    region: "상하이 / 귀국",
    transport: "🚌 이동  ✈️ CZ369  PVG → ICN  16:50 → 20:05",
    summary: "스타벅스 리저브 로스터리 → 장원 (장위엔) → 공항 가는 길 점심 → 푸동공항 → 귀국",
    breakfast: "호텔식",
    lunch: "현지식 (포함)",
    dinner: "기내식 또는 공항",
    accommodation: "귀국",
    hotelMapsUrl: "",
    spots: [
      {
        time: "오전",
        name: "스타벅스 리저브 로스터리 (회해중로)",
        description: "☕ Starbucks Reserve Roastery Shanghai\n\n2017년 오픈 당시 세계 최대 규모(약 2,700㎡)로 화제가 됐던 스타벅스 리저브 로스터리 상하이점입니다. 회해중로(淮海中路)에 위치하며 대형 커피 로스팅 실린더와 구리 파이프라인이 상징입니다.\n\n· 리저브 원두 로스팅 시연\n· Teavana 티 바, 프린치(Princi) 베이커리 입점\n· 오리지널 굿즈 매장",
        address: "789 Nanjing W Rd (淮海中路), Jing'an District, Shanghai",
        imagePath: "/images/spot-3-3.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Starbucks+Reserve+Roastery+Shanghai+Huaihai",
      },
      {
        time: "오전~오후",
        name: "장원 (장위엔, 张园)",
        description: "🏛️ 장원 (张园 Zhang Garden)\n\n1882년 조성된 상하이 최대·최고(最古)의 석고문(石库门) 건축 단지입니다. 2022년 리노베이션을 마치고 재개장하며 명품 부티크·카페·갤러리가 입점한 라이프스타일 문화 지구로 변신했습니다.\n\n· 상하이에서 가장 잘 보존된 석고문 건축군\n· 루이 비통, 디올, 프라다 등 명품 팝업 다수\n· 골목마다 사진 명소",
        address: "Zhang Yuan, 590 Weihai Rd, Jing'an District, Shanghai",
        imagePath: "/images/spot-3-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zhang+Yuan+Shanghai+Weihai+Road",
      },
      {
        time: "점심",
        name: "점심식사 (공항 가는 길)",
        description: "🍽️ 공항으로 이동하는 길에 현지식으로 점심 식사를 즐깁니다.\n\n중식 포함",
      },
      {
        time: "16:50",
        name: "푸동공항 출발 (중국남방항공 CZ369)",
        description: "✈️ 중국남방항공 CZ369  PVG → ICN  16:50 → 20:05\n\n2박 3일의 상하이 여행을 마칩니다.",
        address: "Shanghai Pudong International Airport, Shanghai",
        imagePath: "/images/spot-4-7.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shanghai+Pudong+International+Airport",
      },
    ],
  },
};

export function generateStaticParams() {
  return [{ day: "1" }, { day: "2" }, { day: "3" }];
}

export default async function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayParam } = await params;
  const dayNum = parseInt(dayParam, 10);
  const data = dayData[dayNum];

  if (!data) notFound();

  return (
    <div className="space-y-6 px-4 py-6">
      <DayHeader
        dayNumber={data.dayNumber}
        date={data.date}
        weekday={data.weekday}
        region={data.region}
        summary={data.summary}
      />
      <TransportBadge transport={data.transport} />

      <section className="space-y-0">
        {data.spots.map((spot, i) => (
          <TimelineItem
            key={i}
            time={spot.time}
            name={spot.name}
            description={spot.description}
            address={spot.address}
            imagePath={spot.imagePath}
            mapsUrl={spot.mapsUrl}
            isLast={i === data.spots.length - 1}
          />
        ))}
      </section>

      <MealInfo
        breakfast={data.breakfast}
        lunch={data.lunch}
        dinner={data.dinner}
      />

      {data.accommodation !== "귀국" && (
        <HotelCard
          name={data.accommodation}
          mapsUrl={data.hotelMapsUrl}
          address="318 Jingang Road, Pudong District, Shanghai"
          phone="86-21-5899 3838"
        />
      )}
    </div>
  );
}
