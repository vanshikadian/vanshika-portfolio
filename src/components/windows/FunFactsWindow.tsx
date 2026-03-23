"use client";

const FACTS = [
  { emoji: "🏊", text: "national-level competitive swimmer" },
  { emoji: "🏠", text: "resident assistant — mentor for 50 students" },
  { emoji: "📱", text: "built an app that 20,000 people used before i graduated" },
  { emoji: "🎓", text: "7 semesters. 7x dean's list. no exceptions." },
  { emoji: "🧠", text: "cognitive science minor — because i find how people think fascinating" },
  { emoji: "🌍", text: "originally from india, studying in michigan" },
  { emoji: "🎬", text: "i love movies, shows and music — always open to recommendations" },
  { emoji: "🐶", text: "dog lover — dogs make everything better, no debate" },
];

export default function FunFactsWindow() {
  return (
    <div
      className="h-full overflow-y-auto window-scroll px-6 py-5 font-instrument"
      style={{ color: "rgba(255,255,255,0.82)" }}
    >
      <h1 className="font-cormorant text-[26px] font-semibold text-white mb-1 leading-tight">
        fun-facts.txt
      </h1>
      <p className="text-[12px] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
        things that don&apos;t fit on a resume
      </p>

      <div className="h-px w-full mb-5" style={{ background: "rgba(255,255,255,0.08)" }} />

      <ul className="space-y-4">
        {FACTS.map(({ emoji, text }, i) => (
          <li key={i} className="flex items-start gap-3 text-[13.5px] leading-relaxed">
            <span className="text-[18px] shrink-0 mt-0.5">{emoji}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
