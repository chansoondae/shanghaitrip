import { Calendar, User, Hotel, Plane, DollarSign } from "lucide-react";

const items = [
  { icon: Calendar, label: "기간", value: "2026.09.17 ~ 09.20 (3박 4일)" },
  { icon: Plane, label: "출국", value: "중국남방항공 CZ314  ICN → PVG  9/17  12:35 → 13:45" },
  { icon: Plane, label: "귀국", value: "중국남방항공 CZ369  PVG → ICN  9/20  16:50 → 20:05" },
  { icon: User, label: "인솔자", value: "에이미 010-2228-0235" },
  { icon: User, label: "도슨트", value: "채수한 010-7407-1224" },
  { icon: Hotel, label: "숙소", value: "Regal Jinfeng Hotel 리걸 진펑 호텔 (3박)" },
  { icon: DollarSign, label: "가이드 경비", value: "USD 40 (미국 달러로 준비)" },
];

export function TourSummaryCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 space-y-3">
      <h2 className="text-lg font-bold">투어 요약</h2>
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-3">
          <Icon className="h-4 w-4 text-[#ff6b35] mt-0.5 shrink-0" />
          <div>
            <span className="text-xs text-neutral-500">{label}</span>
            <p className="text-sm font-medium">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
