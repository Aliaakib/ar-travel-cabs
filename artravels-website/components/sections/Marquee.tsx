export default function Marquee() {
  const textItems = ["AFFORDABLE", "PREMIUM", "RATES", "CAR", "RENTAL", "24/7", "SERVICE"];
  
  // Create a block of items. We duplicate it below to create a seamless infinite scroll.
  const marqueeContent = textItems.map((item, idx) => (
    <div key={idx} className="flex items-center text-[#061A33]">
      <span className="text-xl sm:text-2xl font-black px-4 sm:px-8 tracking-wide">{item}</span>
      <div className="w-2 h-2 rounded-full bg-black/20 shrink-0"></div>
    </div>
  ));

  return (
    <div className="w-full bg-[#FFC107] py-3 sm:py-4 overflow-hidden flex whitespace-nowrap relative border-b-2 border-black/10">
      {/* First track */}
      <div className="animate-[marquee_25s_linear_infinite] flex items-center shrink-0 min-w-full justify-around">
        {marqueeContent}
      </div>
      {/* Second identical track that follows immediately after the first one */}
      <div className="animate-[marquee_25s_linear_infinite] flex items-center shrink-0 min-w-full justify-around">
        {marqueeContent}
      </div>
    </div>
  );
}
