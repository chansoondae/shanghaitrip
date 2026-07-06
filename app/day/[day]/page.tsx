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
    date: "7월 10일",
    weekday: "금요일",
    region: "상하이",
    transport: "CZ314  ICN → PVG  12:35 → 13:45",
    summary: "인천 출발 → M50 + 1000trees(천안천수) → 와이탄 야경",
    breakfast: "불포함",
    lunch: "불포함",
    dinner: "상해 요리 (포함)",
    accommodation: HOTEL_NAME,
    hotelMapsUrl: HOTEL_MAPS,
    spots: [
      {
        time: "12:35",
        name: "인천공항 출발 (중국남방항공 CZ314)",
        description: "✈️ 중국남방항공 CZ314  ICN → PVG  12:35 → 13:45\n\n상하이 푸동국제공항 도착 후 입국 수속을 마치고 이동합니다.",
        address: "Incheon International Airport, Incheon",
        imagePath: "/images/spot-1-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Incheon+International+Airport",
      },
      {
        time: "오후",
        name: "M50 창의원구",
        description: "상하이의 대표적인 예술 특구 M50을 방문합니다. 옛 방직 공장을 개조한 공간으로, 갤러리와 스튜디오가 밀집해 있어 중국 현대 미술을 한눈에 감상할 수 있습니다.",
        address: "50 Moganshan Rd, Putuo District, Shanghai",
        imagePath: "/images/spot-1-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=M50+Creative+Park+Shanghai",
      },
      {
        time: "오후",
        name: "1000 Trees (천안천수)",
        description: "천 개의 나무가 심어진 독특한 건물 외관으로 유명한 복합 문화 공간입니다. 쇼핑, 식음료, 문화 시설이 결합된 상하이의 새로운 랜드마크입니다.",
        address: "1000 Changhua Rd, Putuo District, Shanghai",
        imagePath: "/images/spot-1-3.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=1000+Trees+Shanghai",
      },
      {
        time: "18:30",
        name: "저녁식사 (상해 요리)",
        description: "🍽️ 상해 전통 요리로 저녁 식사를 즐깁니다.\n\n석식 포함 (상해요리)",
      },
      {
        time: "19:30",
        name: "와이탄 야경",
        description: "상하이의 상징 와이탄에서 황푸강 너머 푸동 스카이라인의 화려한 야경을 감상합니다. 동방명주 타워, 상하이 타워 등 마천루들이 만들어내는 야경이 압권입니다.",
        address: "Zhongshan E 2nd Rd, Huangpu District, Shanghai",
        imagePath: "/images/spot-1-4.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Bund+Shanghai",
      },
    ],
  },
  2: {
    dayNumber: 2,
    date: "7월 11일",
    weekday: "토요일",
    region: "상하이",
    transport: "🚌 이동",
    summary: "푸동 미술관 → Roof PM 점심 → 점도덕 딤섬 → EKA(천안우)",
    breakfast: "호텔식",
    lunch: "ROOF PM (예약 요청, 포함)",
    dinner: "점도덕 딤섬 (포함)",
    accommodation: HOTEL_NAME,
    hotelMapsUrl: HOTEL_MAPS,
    spots: [
      {
        time: "10:00",
        name: "푸동 미술관",
        description: "🎨 조르조 모란디 대규모 회고전\n(2026.06.17 ~ 10.28)\n\n이탈리아 볼로냐 출신의 거장 조르조 모란디(Giorgio Morandi, 1890–1964)의 역대 최대 규모 해외 회고전입니다. 30여 개 기관과 개인 소장처에서 모은 140점 이상의 원작을 포함해 총 200여 점이 전시됩니다.\n\n· 회화, 에칭, 수채화, 드로잉 등 망라\n· 3,000㎡ 전시 공간을 35개 소규모 룸으로 구성 — 모란디의 작업실 크기를 재현\n· 모란디가 에칭 작업에 사용하던 실제 인쇄기가 볼로냐를 최초로 떠나 전시 출품\n· 전시 디자인: Aldo Cibic Workshop",
        address: "2777 Binjiang Ave, Pudong New Area, Shanghai",
        imagePath: "/images/spot-2-1.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pudong+Art+Museum+Shanghai",
      },
      {
        time: "12:00",
        name: "Roof PM (점심)",
        description: "🍽️ 예약 요청\n\n중식 포함 (ROOF PM 예약 요청)",
        imagePath: "/images/spot-2-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Roof+PM+Shanghai",
      },
      {
        time: "17:00",
        name: "점도덕 딤섬 ⭐⭐⭐",
        description: "🥟 상하이 최고의 딤섬 맛집 점도덕에서 저녁 식사를 즐깁니다. 샤오롱바오(소롱포), 하가우 등 다양한 딤섬을 맛볼 수 있습니다.\n\n석식 포함 (점도덕)",
        address: "Shanghai, China",
        imagePath: "/images/spot-2-4.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Din+Tai+Fung+Shanghai",
      },
      {
        time: "19:00",
        name: "EKA (천안우)",
        description: "🏭 EKA·天物 (EKA 천안우)\n\n1869년 청나라 시절 세관 공장으로 시작해 상하이 해양계기 공장으로 쓰이던 부지를 재생한 복합 문화 공간입니다. 100에이커 부지 위에 40여 개 건물이 30가지 이상의 건축 양식으로 재탄생해 '야외 건축 박물관'이라 불립니다.\n\n· 산업 유산(붉은 벽돌·콘크리트·오래된 나무)을 그대로 보존\n· 갤러리·팝업 마켓·카페·레스토랑·편집숍 등 밀집\n· EKA = Exploration · Knowledge · Aesthetics\n· 운영시간: 10:00 ~ 02:00",
        address: "535 Jinqiao Rd, Pudong New Area, Shanghai",
        imagePath: "/images/spot-2-6.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=EKA+Tianwu+535+Jinqiao+Road+Pudong+Shanghai",
      },
    ],
  },
  3: {
    dayNumber: 3,
    date: "7월 12일",
    weekday: "일요일",
    region: "쑤저우 / 상하이",
    transport: "🚌 이동 (상하이 → 쑤저우 약 30분)",
    summary: "쑤저우 현대미술관 + 쑤저우 박물관 → 상해 옛거리",
    breakfast: "호텔식",
    lunch: "현지식",
    dinner: "현지식",
    accommodation: HOTEL_NAME,
    hotelMapsUrl: HOTEL_MAPS,
    spots: [
      {
        time: "오전",
        name: "쑤저우 현대미술관",
        description: "🏛️ 쑤저우 현대미술관 (Suzhou MoCA)\n\n덴마크 건축그룹 BIG(비야르케 잉겔스 그룹)이 설계한 미술관입니다. 진지호(金鸡湖) 수변에 자리하며, 쑤저우 전통 정원의 '랑(廊, 지붕 있는 회랑)' 개념을 현대적으로 재해석한 리본형 지붕 아래 12개 파빌리온이 모인 구조입니다.\n\n· 총면적 60,000㎡\n· 갤러리 4개동 + 공연장·레스토랑·다목적홀 등\n· 현대미술·디자인·공공 프로그램 중심\n· 쑤저우 전통 정원 미학을 현대 건축 언어로 구현\n\n⚠️ 6월 27일 오픈 예정이었으나 무기한 연장되었습니다. 외관 및 주변 산책으로 대체합니다.",
        address: "Suzhou, Jiangsu, China",
        imagePath: "/images/spot-3-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Suzhou+Museum+of+Contemporary+Art",
      },
      {
        time: "오전~오후",
        name: "쑤저우 박물관",
        description: "🏛️ 쑤저우 박물관 (苏州博物馆)\n\n중국계 미국 건축가 I.M. 페이(貝聿銘, 1917–2019)가 설계해 2006년 개관한 박물관입니다. 페이에게 쑤저우는 고향으로, 그의 마지막 대형 프로젝트 중 하나입니다. 전통 강남 정원 양식과 현대 기하학적 건축이 조화를 이루며, 흰 벽·회색 기와·물·빛을 활용한 공간 구성이 압도적입니다.\n\n⚠️ 본관 내부는 현지인에게도 인기가 높아 무료 사전 예약이 매우 치열합니다. 당일 입장은 사실상 어렵습니다.",
        address: "204 Dongbei St, Gusu District, Suzhou, Jiangsu",
        imagePath: "/images/spot-3-4.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Suzhou+Museum+China",
      },
      {
        time: "오후~저녁",
        name: "쑤저우 구경",
        description: "🗺️ 추천 산책 코스\n\n📍 평강로 (平江路 Pingjiang Road)\n쑤저우 구시가지의 대표 수변 골목. 운하를 따라 찻집·카페·기념품 가게가 줄지어 있습니다. 전통 나룻배 투어(약 25분)도 즐길 수 있어요. 아침이나 오후 늦게 방문하면 한적합니다.\n\n📍 산당가 (山塘街 Shantang Street)\n약 1,200년 역사의 운하 거리. 저녁 무렵 홍등이 켜지면 분위기가 절정입니다. 상업화된 동쪽 구간보다 통귀교(通貴桥) 서쪽의 현지인 구역을 추천합니다. 'Sun Sheng Xing'에서 쑤저우식 아오자오(奥灶) 면 추천.\n\n💡 구글맵 사용 불가 — 고덕지도(AMAP) 필수",
        address: "Suzhou, Jiangsu, China",
        imagePath: "/images/spot-3-7.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Suzhou+Old+Town+China",
      },
      {
        time: "저녁 전",
        name: "중화예술궁 (中华艺术宫)",
        description: "🎨 중화예술궁 (China Art Museum)\n\n2010년 상하이 엑스포 중국관으로 사용된 상징적인 붉은 건물을 미술관으로 재탄생시킨 공간입니다. 지상 41m의 웅장한 외관이 압도적이며, 중국 근현대 미술 작품을 중심으로 대규모 컬렉션을 보유하고 있습니다.\n\n· 무료 입장 (사전 예약 권장)\n· 운영시간: 화~일 10:00~18:00 (월요일 휴관)\n· 6호선 중화예술궁역(中华艺术宫站) 하차\n\n⚠️ 쑤저우 현대미술관 오픈 연기로 대신 방문합니다.",
        address: "205 Shangnan Rd, Huangpu District, Shanghai",
        imagePath: "/images/spot-3-8.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=China+Art+Museum+Shanghai+205+Shangnan+Road",
      },
      {
        time: "저녁",
        name: "상해 옛거리",
        description: "🏮 상해 옛거리 (上海老街 / 方浜中路 Fangbang Middle Road)\n\n명·청대 양식의 건축이 약 825m에 걸쳐 이어지는 상하이 구시가지의 핵심 거리입니다. 서쪽은 전통 공예품·골동품 상점, 동쪽 끝은 예원(豫园)·성황묘(城隍庙) 상권과 연결됩니다. 무료 입장, 10:00~22:00 운영.\n\n🍜 꼭 먹어봐야 할 것들\n· 샤오롱바오(小笼包) — 한 입에 바로 베어물지 말고, 작은 구멍 내어 국물 먼저 빨아 마신 후 먹을 것\n· 생젠바오(生煎包) — 바닥이 바삭한 팬프라이드 고기만두\n· 취두부(臭豆腐) — 발효 두부 튀김, 도전해볼 것\n· 탕후루(糖葫芦) — 과일 꼬치 사탕\n\n📍 저녁 무렵 홍등이 켜지면 분위기가 절정 — 사진 명소",
        address: "Old Street, Huangpu District, Shanghai",
        imagePath: "/images/spot-3-6.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shanghai+Old+Street+Fangbang+Zhonglu",
      },
    ],
  },
  4: {
    dayNumber: 4,
    date: "7월 13일",
    weekday: "월요일",
    region: "상하이 / 귀국",
    transport: "CZ369  PVG → ICN  16:50 → 20:05",
    summary: "우캉멘션 주변 관광 → 푸동공항 → 귀국",
    breakfast: "호텔식",
    lunch: "현지식",
    dinner: "기내식 또는 공항",
    accommodation: "귀국",
    hotelMapsUrl: "",
    spots: [
      {
        time: "오전~오후",
        name: "우캉멘션 주변",
        description: "🏢 우캉맨션 (武康大楼)\n\n헝가리 건축가 라슬로 후데츠(László Hudec)가 1924년 설계한 아르데코 양식의 건물로, 쐐기형 삼각 외관이 특징입니다. '상하이의 플랫아이언 빌딩'으로 불리며 상하이에서 가장 아름다운 모퉁이로 꼽힙니다. 교차로 모퉁이에서 광각으로 촬영하면 특유의 배 모양이 잘 살아납니다.\n\n🗺️ 추천 시티워크 코스\n우캉맨션 → 우캉루(武康路) → 안푸루(安福路) → 톈쯔팡(田子坊)\n총 약 2.5km, 카페·사진 포함 3~4시간 소요\n\n📍 놓치지 말 것\n· 안푸루 — 862m 가로수길, 유럽풍 타운하우스와 카페·편집숍 밀집\n· %Arabica, HARMAY, 13DE MARZO(바이럴 곰 테마 카페) 등\n\n💡 오전 방문 시 인파가 적어 한적하게 사진 찍기 좋습니다.",
        address: "Wukang Rd, Xuhui District, Shanghai",
        imagePath: "/images/spot-4-2.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Wukang+Mansion+Shanghai",
      },
      {
        time: "16:50",
        name: "푸동공항 출발 (중국남방항공 CZ369)",
        description: "✈️ 중국남방항공 CZ369  PVG → ICN  16:50 → 20:05\n\n3박 4일의 상하이 여행을 마칩니다.",
        address: "Shanghai Pudong International Airport, Shanghai",
        imagePath: "/images/spot-4-7.jpg",
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
