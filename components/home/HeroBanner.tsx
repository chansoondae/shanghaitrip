export function HeroBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden h-52 bg-gradient-to-br from-red-500 to-rose-400 flex flex-col items-center justify-center text-white text-center shadow-sm">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 px-4">
        <h1 className="text-2xl font-bold mb-1">상하이·쑤저우 여행</h1>
        <p className="text-xs opacity-80 mb-1">3박4일</p>
        <p className="text-sm opacity-90 mb-4">2026.09.17 Thu → 09.20 Sun</p>
        <div className="flex flex-wrap justify-center gap-2">
          {["#자코메티", "#EKA", "#푸동미술관", "#모란디", "#RoofPM", "#쑤저우현대미술관", "#피카소", "#쑤저우박물관", "#와이탄"].map((tag) => (
            <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
