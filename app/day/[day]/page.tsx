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
    date: "9월 17일",
    weekday: "목요일",
    region: "상하이",
    transport: "CZ314  ICN → PVG  12:35 → 13:45",
    summary: "인천 출발 → 민생현대미술관 (자코메티) → 하이디라오 → 와이탄 야경",
    breakfast: "불포함",
    lunch: "기내식",
    dinner: "하이디라오 (포함)",
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
        time: "18:30",
        name: "하이디라오 (海底捞) — 훠궈 ⭐⭐⭐",
        description: "🔥 **하이디라오 (海底捞 HaiDiLao Hot Pot)**\n\n1994년 쓰촨성 젠양(简阳)에서 시작된 중국 최대 훠궈 체인. 극진한 서비스로 유명한 대표 브랜드로, 대기 중 무료 매니큐어·간식·안마 등 파격적인 서비스가 상징입니다.\n\n🍲 **오늘 육수 구성 (원앙 냄비)**\n· **麻辣锅底 (마라궈디)** — 정통 쓰촨 매운 마라 육수\n· **番茄锅 (판치에궈)** — 새콤달콤한 토마토 육수 (매운 것 못 드시는 분 추천)\n\n🍈 **셀프바 강력 추천!**\n**메론 등 과일이 셀프바에 무제한 준비되어 있어 마음껏 가져다 드실 수 있습니다.** 매콤한 훠궈 사이사이 시원한 과일로 입가심하시면 최고입니다. 과일 외에도 소스바(酱料台)에서 참깨장·마늘·고수·다진 파·고추기름 등 무제한 셀프. 골든 룰 조합은 **참깨장 + 마늘 + 다진 파 + 고추기름**.\n\n💡 **팁**\n· 대기 시간에 무료 다과·게임·매니큐어 서비스 신청 가능\n· 생일 방문 시 폭죽 이벤트\n· 국수를 공중에서 돌리며 뽑아주는 **라오미엔(捞面) 퍼포먼스** 꼭 관람\n\n석식 포함 (하이디라오)",
        address: "Shanghai, China",
        imagePath: "/images/IMG＿9899.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Haidilao+Hot+Pot+Shanghai",
      },
      {
        time: "저녁",
        name: "와이탄 야경",
        description: "🌆 상하이의 상징 와이탄에서 황푸강 너머 푸동 스카이라인의 화려한 야경을 감상합니다. 동방명주 타워, 상하이 타워 등 마천루들이 만들어내는 야경이 압권입니다.",
        address: "Zhongshan E 2nd Rd, Huangpu District, Shanghai",
        imagePath: "/images/spot-2-8.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Bund+Shanghai",
      },
    ],
  },
  2: {
    dayNumber: 2,
    date: "9월 18일",
    weekday: "금요일",
    region: "상하이",
    transport: "🚌 이동",
    summary: "09:00 호텔 출발 → 푸동 미술관 → Roof PM 점심 → 루이호 → 자유시간 (스타벅스 리저브 & 장원) → 점도덕 딤섬 → 상해 옛거리",
    breakfast: "호텔식",
    lunch: "ROOF PM (예약 요청, 포함)",
    dinner: "점도덕 딤섬 (포함)",
    accommodation: HOTEL_NAME,
    hotelMapsUrl: HOTEL_MAPS,
    spots: [
      {
        time: "09:00",
        name: "호텔 로비 출발",
        description: "🚌 Regal Jinfeng Hotel 로비에서 09:00 출발합니다.\n\n조식 후 여유롭게 준비해 주세요. 늦지 않도록 5분 전 로비 집결 부탁드립니다.",
        address: "318 Jingang Road, Pudong District, Shanghai",
        mapsUrl: HOTEL_MAPS,
      },
      {
        time: "10:00",
        name: "푸동 미술관 (Museum of Art Pudong)",
        description: "🏛️ **푸동 미술관 (Museum of Art Pudong, MAP)**\n\n프랑스 건축가 장 누벨(Jean Nouvel)이 설계한 상하이 푸동 신구의 랜드마크 미술관.\n\n━━━━━━━━━━━━━━━\n\n🎨 **조르조 모란디: Solo**\n**Giorgio Morandi. Solo**\n📅 2026년 6월 17일 개막\n\n**작가 소개**\n조르조 모란디(Giorgio Morandi, 1890–1964)는 20세기 이탈리아 회화의 가장 영향력 있는 화가 중 한 명입니다. 그의 이름은 하나의 색채 시스템 — **'모란디 컬러(Morandi colors)'** — 의 대명사가 되었습니다. 낮은 채도와 고요하고 균형 잡힌 색조는 중국 대중문화에서 폭발적 인기를 얻으며 '세계에서 가장 세련된 색채 미학'으로 평가받습니다.\n\n그는 고향 볼로냐(Bologna)를 거의 떠나지 않고 은둔 생활을 했습니다. 초기에는 아방가르드와 형이상학 회화(Metaphysical painting)에 참여했으나, 결국 자신의 미학적 입장을 고수하며 **병·꽃·창밖 풍경**이라는 제한된 소재에서 무한한 변주를 만들어냈습니다.\n\n**전시 개요**\n금세기 전 세계에서 열린 **모란디 개인전 중 최대 규모**. 30여 개 국제 기관·컬렉터로부터 200점 이상을 모았으며, 이 중 **모란디 원작 140점 이상**, **약 120점은 중국 초공개**입니다.\n\n· 30개 이상 서브섹션으로 구성\n· '병·주전자 화가'라는 단순한 규정을 넘어 정물·풍경·꽃·자화상까지 다양한 소재\n· 유화·판화·수채화 등 매체 총망라\n· 작업실 사진 50점 이상, 실제 사용한 오브제(같은 소재 회화와 나란히 전시), 개인 장서·서신·아카이브 자료\n· 현대미술가 **타시타 딘(Tacita Dean)의 영상 설치 2점** — 모란디의 지속적 영향력 조명\n\n**하이라이트**\n· 평생 7점만 그린 **자화상 중 1점**\n· 여동생을 그린 **미공개 초상화**\n· 12점밖에 없는 **형이상학 회화 중 1점**\n· 극히 희귀한 **전시(戰時) 조개 회화·수채화**\n· 모란디가 사용한 **개인 스타 인쇄기(star press)** — 1993년 이후 처음으로 볼로냐를 떠남\n\n**전시명 'Solo'의 의미**\n관람객이 작품 앞에서 경험하는 심리적 감각에서 유래한 개념이자, 음악 용어 '솔로' — 하나의 목소리가 무대 전체를 홀로 이끄는 정점의 순간을 차용. 최소한의 요소와 색으로 응축된 시각적 솔로를 관객에게 전달합니다.\n\n**주최·기획**\n· 제작: Shanghai Lujiazui East Bund Culture Development Co., Ltd.\n· 주관: Museum of Art Pudong × Museo Morandi\n· 큐레이터: Lorenzo Balbi (Museo Morandi 관장), Francesco D'Arelli (상하이 이탈리아 문화원장)\n· 전시 디자인: **Aldo Cibic Workshop**\n· 후원: 주상하이 이탈리아 총영사관, 상하이 이탈리아 문화원, 볼로냐시\n\n💡 3,000㎡ 규모의 전시 공간을 소규모 룸으로 세분화한 형태 — 관람 시간 넉넉히 확보 권장.",
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
        time: "14:30",
        name: "푸동미술관 1층 집결 · 버스 탑승",
        description: "🚌 **푸동미술관 1층 로비에 모여 버스 탑승**\n\n점심 이후 자유 관람을 마치고 14:30까지 푸동미술관 1층 로비에 집결합니다. 인원 확인 후 다 함께 버스로 이동합니다.\n\n📍 다음 목적지: 루이호 (瑞虹天地 Rui Hong Tian Di)\n· 푸동 → 홍커우 이동, 약 30~40분 소요 (교통 상황에 따라 변동)\n· 지각 시 그룹 전체 지연 — 시간 엄수 부탁드립니다\n\n💡 화장실은 미술관 내부에서 미리 다녀오시면 좋습니다.",
        address: "2777 Binjiang Ave, Pudong New Area, Shanghai",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pudong+Art+Museum+Shanghai",
      },
      {
        time: "15:00",
        name: "루이호 (瑞虹天地 Rui Hong Tian Di)",
        description: "🌆 **루이호 톈디 (瑞虹天地 Rui Hong Tian Di)**\n\n상하이 홍커우구(虹口区)에 위치한 대형 복합 라이프스타일 단지. 도심 속 인공 호수를 중심으로 조성된 개방형 상권으로, 상하이 젊은 세대와 SNS 인플루언서들의 최신 핫플레이스입니다.\n\n🏙️ **하이라이트**\n· **月亮湾 (달의 만)** — 원형 인공 호수와 초승달 모양 산책로. 야경 촬영 명소\n· **太阳宫 (Sun Palace)** — 유리 돔 지붕의 대형 실내몰\n· 브런치 카페·베이커리·크래프트 맥주 바 밀집\n· 팝업 전시·아트 인스톨레이션 상시 진행\n\n💡 톈디(天地) 시리즈는 상하이의 대표 라이프스타일 브랜드 (신톈디·후이톈디에 이은 신세대 버전). 낮보다 해질녘~저녁이 사진이 예쁩니다.\n\n🎟️ **내부 전시 무료 입장 예약 가이드**\n아트프렌즈 카페에 상세한 예약 방법이 정리되어 있습니다:\nhttps://cafe.naver.com/amateurmagician/79363",
        address: "Ruihong Tiandi, Hongkou District, Shanghai",
        imagePath: "/images/spot-3-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ruihong+Tiandi+Shanghai",
      },
      {
        time: "~17:00",
        name: "자유시간 · 스타벅스 리저브 & 장원",
        description: "⏰ **루이호 관람 후 17:00까지 자유시간**\n\n루이호 관람을 마친 뒤 인근 지역에서 17:00까지 자유롭게 시간을 보내시면 됩니다. 도보로 이동 가능한 두 곳을 추천드립니다.\n\n━━━━━━━━━━━━━━━\n\n☕ **스타벅스 리저브 로스터리 (Starbucks Reserve Roastery Shanghai)**\n\n2017년 오픈 당시 세계 최대 규모(약 2,700㎡)로 화제가 됐던 스타벅스 리저브 로스터리 상하이점. 회해중로(淮海中路)에 위치하며 대형 커피 로스팅 실린더와 구리 파이프라인이 상징입니다.\n\n· 리저브 원두 로스팅 시연\n· Teavana 티 바, 프린치(Princi) 베이커리 입점\n· 오리지널 굿즈 매장\n📍 789 Nanjing W Rd (淮海中路), Jing'an District\n\n━━━━━━━━━━━━━━━\n\n🏛️ **장원 (張園 Zhang Garden)**\n\n1882년 조성된 상하이 최대·최고(最古)의 석고문(石库门) 건축 단지. 2022년 리노베이션을 마치고 재개장하며 명품 부티크·카페·갤러리가 입점한 라이프스타일 문화 지구로 변신했습니다.\n\n· 상하이에서 가장 잘 보존된 석고문 건축군\n· 루이 비통, 디올, 프라다 등 명품 팝업 다수\n· 골목마다 사진 명소\n📍 Zhang Yuan, 590 Weihai Rd, Jing'an District\n\n━━━━━━━━━━━━━━━\n\n💡 **팁**\n· 스타벅스 리저브 → 장원 도보 약 10분\n· 두 곳 다 둘러보거나, 한 곳에서 여유롭게 시간 보내셔도 좋습니다\n· 17:00 집결 장소는 인솔자 안내에 따라 주세요",
        address: "Jing'an District, Shanghai (스타벅스 리저브 & 장원 일대)",
        imagePath: "/images/spot-3-3.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Zhang+Yuan+Shanghai+Weihai+Road",
      },
      {
        time: "17:00",
        name: "점도덕 (点都德) — 광둥식 딤섬 ⭐⭐⭐",
        description: "🥟 **점도덕 (点都德 Dim Dim Sum)**\n\n1933년 광저우(广州)에서 시작된 **정통 광둥식 딤섬(粵式點心)** 브랜드입니다. 오랜 역사의 노포이면서 젊은 세대 감각의 매장 디자인으로 재해석해 광저우·상하이·베이징 등지에서 웨이팅이 끊이지 않는 인기 체인입니다.\n\n🏮 **꼭 먹어봐야 할 시그니처**\n· ⭐ **红米肠粉 (홍미창펀)** — 점도덕의 대표 시그니처. **붉은 쌀(红米)**로 반죽한 창펀 피가 은은한 분홍빛을 띠며 쫀득한 식감이 일품. 안에는 새우가 통으로 들어감. **꼭 주문!**\n· **蝦餃 (하가우, 샤자오)** — 반투명 껍질이 얇게 비치는 새우 딤섬. 광둥 딤섬의 왕도\n· **叉燒包 (차슈바오)** — 달콤짭짤한 차슈가 든 갈라진 만두. 폭신폭신한 표면이 트레이드마크\n· **流沙包 (류샤바오)** — 커스터드 소금 노른자가 흘러나오는 디저트 만두\n· **鳳爪 (펑좌)** — 부드럽게 쪄낸 닭발, 딤섬 필수\n· **蛋撻 (에그타르트)** — 겉바속촉의 광둥식 에그타르트\n· **糯米雞 (누오미지)** — 연잎에 싼 찹쌀 닭고기 찜\n\n💡 상하이식 샤오롱바오(小笼包)는 강남 계열이라 점도덕의 시그니처는 아닙니다. **홍미창펀·하가우·류샤바오** 위주로 주문하시는 걸 추천합니다.\n\n석식 포함 (점도덕)",
        address: "Shanghai, China",
        imagePath: "/images/spot-2-4.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E7%82%B9%E9%83%BD%E5%BE%B7+Shanghai",
      },
      {
        time: "18:30",
        name: "상해 옛거리",
        description: "🏮 상해 옛거리 (上海老街 / 方浜中路 Fangbang Middle Road)\n\n명·청대 양식의 건축이 약 825m에 걸쳐 이어지는 상하이 구시가지의 핵심 거리입니다. 서쪽은 전통 공예품·골동품 상점, 동쪽 끝은 예원(豫园)·성황묘(城隍庙) 상권과 연결됩니다.\n\n🍜 꼭 먹어봐야 할 것들\n· 샤오롱바오(小笼包)\n· 생젠바오(生煎包) — 바닥이 바삭한 팬프라이드 고기만두\n· 취두부(臭豆腐) — 발효 두부 튀김\n· 탕후루(糖葫芦) — 과일 꼬치 사탕\n\n📍 저녁 무렵 홍등이 켜지면 분위기가 절정 — 사진 명소",
        address: "Old Street, Huangpu District, Shanghai",
        imagePath: "/images/spot-3-6.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shanghai+Old+Street+Fangbang+Zhonglu",
      },
    ],
  },
  3: {
    dayNumber: 3,
    date: "9월 19일",
    weekday: "토요일",
    region: "쑤저우 · 상하이",
    transport: "🚄 상하이 → 쑤저우 → 상하이 (약 30분)",
    summary: "08:30 호텔 출발 → 쑤저우 현대미술관 (피카소) → 쑤저우 현지식 → 쑤저우 박물관 → 초강남 사천요리 → EKA",
    breakfast: "호텔식",
    lunch: "쑤저우 현지식 (포함)",
    dinner: "초강남 사천요리 (포함)",
    accommodation: HOTEL_NAME,
    hotelMapsUrl: HOTEL_MAPS,
    spots: [
      {
        time: "08:30",
        name: "호텔 로비 출발",
        description: "🚌 Regal Jinfeng Hotel 로비에서 08:30 출발합니다.\n\n쑤저우까지 이동 시간이 있어 조기 출발합니다. 조식 후 5분 전 로비 집결 부탁드립니다.",
        address: "318 Jingang Road, Pudong District, Shanghai",
        mapsUrl: HOTEL_MAPS,
      },
      {
        time: "10:00",
        name: "쑤저우 현대미술관 · 피카소 특별전",
        description: "🎨 **쑤저우 현대미술관 (苏州现代美术馆 / Suzhou Museum of Contemporary Art)**\n\n2024년 오픈한 쑤저우의 신규 랜드마크 미술관. 진지호(金鸡湖) 호숫가에 위치하며, 자연광이 쏟아지는 개방적인 전시 공간이 특징입니다.\n\n🖼️ **피카소 특별전**\n파블로 피카소(Pablo Picasso, 1881–1973)의 회화·판화·도자·조각 등 전 시기를 아우르는 대규모 특별전. 청색시대부터 입체파, 후기 초현실주의 실험까지 거장의 예술 세계를 총망라합니다.\n\n· 청색시대(Blue Period) 초기 회화\n· 아비뇽의 처녀들 이후 큐비즘 대표작\n· 도자·판화 등 후기 매체 실험\n· 아카이브 자료와 사진\n\n📸 미술관 건축 자체도 촬영 명소 — 유리 파사드와 호수 풍경이 어우러집니다.",
        address: "Suzhou Museum of Contemporary Art, Suzhou",
        imagePath: "/images/suzhoumuseumofcontemporaryart.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Suzhou+Museum+of+Contemporary+Art",
      },
      {
        time: "12:30",
        name: "쑤저우 현지식 점심",
        description: "🍜 **쑤저우 현지식 (苏帮菜)**\n\n쑤저우 요리는 강남 요리(江南菜)의 대표 계열로, 담백하고 섬세한 맛이 특징입니다. 계절 재료를 살린 은근한 단맛이 트레이드마크입니다.\n\n🥢 **꼭 먹어봐야 할 대표 요리**\n· **松鼠桂鱼 (쑹수구이위)** — 다람쥐 모양으로 튀긴 쏘가리 탕수. 쑤저우의 대표작\n· **响油鳝糊 (샹유샨후)** — 뜨거운 기름을 부어 향을 내는 장어 볶음\n· **蟹粉小笼 (셰펀샤오롱)** — 게살이 들어간 샤오롱바오 (가을 제철)\n· **奥灶面 (아오자오미엔)** — 쑤저우 3대 국수 중 하나\n· **樱桃肉 (잉타오러우)** — 앵두 모양으로 조린 돼지고기\n\n중식 포함",
        address: "Suzhou, China",
      },
      {
        time: "14:00",
        name: "쑤저우 박물관 (I.M. Pei 설계)",
        description: "🏛️ **쑤저우 박물관 (苏州博物馆 / Suzhou Museum)**\n\n중국계 미국 건축가 **I.M. 페이(貝聿銘, Ieoh Ming Pei, 1917–2019)**가 설계한 걸작 건축. 2006년 개관했으며, 페이가 자신의 고향 쑤저우에 헌정한 '작은 걸작'으로 불립니다.\n\n🏯 **건축 특징**\n· 전통 강남 원림(园林) 양식을 현대적 기하학으로 재해석\n· 흰 벽·검은 지붕·회색 화강암의 미니멀한 팔레트\n· 삼각형·마름모꼴 지붕이 반복되는 기하학적 리듬\n· 인접한 명대 원림 **졸정원(拙政园)**과 시각적으로 연결\n· 중정의 산수 조경 — 벽면을 캔버스 삼아 돌을 산수화처럼 배치\n\n🖼️ **주요 소장품**\n· 오문화파(吴门画派) 서화 컬렉션\n· 명·청대 도자기와 옥기\n· 원대 청동기\n· 조맹부·문징명 등 강남 문인화\n\n⚠️ **사전 예약 필수** — 무료 관람이지만 온라인 실명 예약제로 운영됩니다. (당일 현장 티켓 없음)\n\n📝 **무료 예약 가이드**\n아트프렌즈 카페에 상세한 예약 방법이 정리되어 있습니다:\nhttps://cafe.naver.com/amateurmagician/109517\n\n📸 페이 건축 팬이라면 반드시 방문해야 할 순례지. 루브르 피라미드·미호 미술관·도하 이슬람 예술 박물관과 함께 페이의 대표작으로 꼽힙니다.",
        address: "204 Dongbei St, Gusu District, Suzhou",
        imagePath: "/images/suzhoumuseum.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Suzhou+Museum+I.M.+Pei",
      },
      {
        time: "18:00",
        name: "초강남 (超江南) — 사천요리 전문점",
        description: "🌶️ **초강남 (超江南)**\n\n상하이의 인기 사천요리(川菜) 전문점에서 저녁 식사를 즐깁니다. 강남풍 인테리어에 정통 쓰촨의 마라(麻辣) 풍미를 결합한 독특한 컨셉의 레스토랑입니다.\n\n🌶️ **필수 주문 메뉴**\n· **麻婆豆腐 (마파두부)** — 쓰촨 요리의 대명사\n· **水煮鱼 (수이주위)** — 매콤한 육수에 익힌 생선, 위에 뜨거운 기름을 붓는 퍼포먼스\n· **宫保鸡丁 (궁바오지딩)** — 매콤달콤 궁보계정, 땅콩과 마른 고추의 조합\n· **口水鸡 (커우수이지)** — 침샘 자극하는 매콤한 냉채 닭\n· **鱼香肉丝 (위샹러우쓰)** — 생선은 없지만 '어향' 소스로 볶은 돼지고기 채\n· **回锅肉 (후이궈러우)** — 두 번 익힌 삼겹살 볶음\n· **担担面 (단단면)** — 쓰촨식 매콤한 국수\n\n💡 매운 정도 조절 가능. 여러 명이 함께 나눠 먹기 좋습니다.\n\n석식 포함 (초강남 사천요리)",
        address: "Shanghai, China",
        imagePath: "/images/spot-2-7.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E8%B6%85%E6%B1%9F%E5%8D%97+Shanghai",
      },
      {
        time: "19:00",
        name: "EKA (천안우) — 야경",
        description: "🏭 **EKA·天物 (EKA 천안우) 야경**\n\n옛 조선소를 개조하여 예술과 라이프스타일이 어우러진 개방형 복합 문화·상업 거리. 조명이 켜지면 붉은 벽돌 건축과 산업 유산이 완전히 다른 분위기로 변신합니다.\n\n· 갤러리·팝업 마켓·카페·바 늦은 시간까지 운영\n· 재즈·라이브 음악이 흐르는 바 다수\n· 산업 유산 조명 아래 포토 스팟\n· EKA = Exploration · Knowledge · Aesthetics\n· 운영시간: 10:00 ~ 02:00",
        address: "535 Jinqiao Rd, Pudong New Area, Shanghai",
        imagePath: "/images/IMG_3933.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=EKA+Tianwu+535+Jinqiao+Road+Pudong+Shanghai",
      },
    ],
  },
  4: {
    dayNumber: 4,
    date: "9월 20일",
    weekday: "일요일",
    region: "상하이 / 귀국",
    transport: "🚌 이동  ✈️ CZ369  PVG → ICN  16:50 → 20:05",
    summary: "08:30 호텔 출발 → 상해임시정부청사 → 신천지 → 티앤즈팡 → 루씨허 버터떡 → 점심 → 푸동공항 → 귀국",
    breakfast: "호텔식",
    lunch: "현지식 (포함)",
    dinner: "기내식 또는 공항",
    accommodation: "귀국",
    hotelMapsUrl: "",
    spots: [
      {
        time: "08:30",
        name: "호텔 로비 출발 · 체크아웃",
        description: "🚌 Regal Jinfeng Hotel 로비에서 08:30 출발합니다.\n\n체크아웃 후 짐은 버스에 싣고 이동합니다. 방에 두고 오는 물건이 없는지 꼭 확인해 주세요. 여권·귀중품은 별도로 소지 부탁드립니다.",
        address: "318 Jingang Road, Pudong District, Shanghai",
        mapsUrl: HOTEL_MAPS,
      },
      {
        time: "09:00",
        name: "대한민국 임시정부 청사 (上海 大韩民国 临时政府 旧址)",
        description: "🇰🇷 **대한민국 임시정부 상해 청사 (마당로 청사)**\n\n1919년 4월 상하이에서 수립된 대한민국 임시정부가 1926년부터 1932년 윤봉길 의사 홍커우 의거 직전까지 사용한 청사입니다. 신천지(新天地) 인근 마당로(马当路) 306롱 4호에 위치한 석고문(石库门) 3층 건물로, 1993년 복원·개관해 대한민국 근현대사 대표 성지로 관리되고 있습니다.\n\n🏛️ **관람 포인트**\n· 1층: 김구 선생 집무실 재현\n· 2층: 회의실·역사 자료 전시\n· 3층: 임시정부 요인 숙소 재현\n· 백범 김구 흉상과 임시정부 각료 사진\n· 3.1 운동·독립 운동 아카이브\n\n💡 **관람 팁**\n· 관람 소요 약 30~40분\n· 내부 촬영 제한 구역 있음 (안내 준수)\n· 방명록 작성 가능\n· 신천지·티앤즈팡과 도보 10분 이내 (같은 프랑스 조계 권역)",
        address: "306 Madang Road, Huangpu District, Shanghai",
        imagePath: "/images/IMG＿8261.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Provisional+Government+of+Republic+of+Korea+Shanghai+Madang+Road",
      },
      {
        time: "09:40",
        name: "신천지 (新天地 Xintiandi)",
        description: "🏘️ **신천지 (新天地 Xintiandi)**\n\n1920년대 상하이 프랑스 조계의 **석고문(石库门)** 주거지를 대대적으로 재생해 만든 개방형 라이프스타일 지구. 2001년 오픈 이후 상하이 최고의 트렌드 세터 지역이자 관광 명소로 자리 잡았습니다.\n\n🏛️ **하이라이트**\n· **中共一大会址 (중공 1차 대회지 기념관)** — 1921년 중국 공산당 창당 회의가 열린 역사적 장소 (신천지 남쪽)\n· 석고문 골목을 걸으며 100년 전 상하이의 정취 감상\n· 브런치 카페·부티크 편집숍·부티크 호텔 밀집\n· **신천지 남·북 블록** — 북쪽은 관광·쇼핑, 남쪽은 오피스·주거\n· 밤이면 야외 테라스 바에 활기\n\n💡 대한민국 임시정부 청사와 도보 5분 거리 — 함께 둘러보기 좋습니다.",
        address: "Xintiandi, Huangpu District, Shanghai",
        imagePath: "/images/IMG_8264.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Xintiandi+Shanghai",
      },
      {
        time: "11:00",
        name: "티앤즈팡 (田子坊 Tianzifang)",
        description: "🎨 **티앤즈팡 (田子坊 Tianzifang)**\n\n1930년대 프랑스 조계의 낡은 석고문 골목(泰康路 210弄)을 예술가·디자이너들이 스튜디오·부티크로 개조해 만든 상하이 대표 아트 지구입니다. 신천지가 대자본으로 재개발된 반면, 티앤즈팡은 원주민이 여전히 거주하며 골목의 원형을 그대로 간직하고 있어 '살아있는 상하이'로 불립니다.\n\n🖼️ **하이라이트**\n· 미로 같은 좁은 골목마다 개성 넘치는 아뜰리에·갤러리 200여 곳\n· 수공예·핸드메이드 액세서리·엽서·차·향 판매\n· 청나라식 주택 사이에 카페·바·수제맥주집 밀집\n· 인생샷 명소: 붉은 벽돌 골목·빈티지 자전거·간판 어우러진 컷\n· 이름의 유래: 명대 화가 **황빈홍(黄宾虹)의 자(字) '전자방(田子方)'**에서 따옴\n\n💡 **팁**\n· 상점 대부분 10:30~22:00 운영 (오전 방문 시 한산)\n· 골목이 좁고 미로형 — 나가는 길을 잊기 쉬우니 지도 앱 필수\n· 신천지의 세련됨과는 다른 '날것의 상하이' 감성",
        address: "210 Taikang Rd, Huangpu District, Shanghai",
        imagePath: "/images/IMG_8279.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tianzifang+Shanghai",
      },
      {
        time: "12:00",
        name: "루씨허 버터떡 (陆氏鲜奶麻糬) — 상하이 명물 버터떡",
        description: "🧈 **루씨허 버터떡 (陆氏鲜奶麻糬 Lu Shi He Fresh Milk Mochi)**\n\n상하이 젊은이들과 관광객 사이에서 웨이팅 필수 코스로 유명한 **상하이 대표 버터떡(黄油年糕) 전문점**. 갓 구워낸 따끈한 떡에 진한 버터와 우유 크림, 흑설탕 시럽을 듬뿍 얹어주는 게 시그니처입니다.\n\n🍡 **필수 메뉴**\n· ⭐ **黄油年糕 (황유녠가오, 버터떡)** — 시그니처. 겉바속쫀 갓 구운 떡 + 녹아내리는 버터 + 흑설탕\n· **鲜奶麻糬 (셴나이마슈, 우유 모찌)** — 부드러운 우유 크림이 든 쫀득한 모찌\n· **红豆年糕 (홍더우녠가오)** — 팥이 들어간 버전\n· **抹茶麻糬 (마차마슈)** — 말차 크림 모찌\n\n💡 **팁**\n· 뜨거울 때 바로 먹어야 최고 — 포장보다 매장 즉석 취식 추천\n· 웨이팅 있을 수 있음\n· 티앤즈팡 인근에 위치\n· 한 조각씩 나눠 먹기 좋음\n\n📸 흑설탕 시럽이 흘러내리는 컷은 인생샷 각",
        address: "Shanghai (티앤즈팡 인근)",
        imagePath: "/images/IMG_1973.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=%E9%99%86%E6%B0%8F%E9%B2%9C%E5%A5%B6%E9%BA%BB%E7%B3%AC+Shanghai",
      },
      {
        time: "13:00",
        name: "점심식사 (공항 가는 길)",
        description: "🍽️ 공항으로 이동하는 길에 현지식으로 점심 식사를 즐깁니다.\n\n중식 포함",
      },
      {
        time: "16:50",
        name: "푸동공항 출발 (중국남방항공 CZ369)",
        description: "✈️ 중국남방항공 CZ369  PVG → ICN  16:50 → 20:05\n\n3박 4일의 상하이·쑤저우 여행을 마칩니다.",
        address: "Shanghai Pudong International Airport, Shanghai",
        imagePath: "/images/IMG_8624.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shanghai+Pudong+International+Airport",
      },
    ],
  },
};

export function generateStaticParams() {
  return [{ day: "1" }, { day: "2" }, { day: "3" }, { day: "4" }];
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
