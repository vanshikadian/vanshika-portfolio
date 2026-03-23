"use client";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10.5px] uppercase tracking-[0.14em] font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.32)" }}>
        {label}
      </p>
      {children}
    </div>
  );
}

export default function AboutWindow() {
  return (
    <div
      className="h-full overflow-y-auto window-scroll px-6 py-5 font-instrument text-[13.5px] leading-relaxed"
      style={{ color: "rgba(255,255,255,0.82)" }}
    >
      <h1 className="font-cormorant text-[30px] font-semibold text-white mb-0.5 leading-tight">
        vanshika kadian
      </h1>
      <p className="text-[12px] mb-6" style={{ color: "rgba(255,255,255,0.42)" }}>
        cs + cognitive science @ michigan state · honors college · gpa 3.8
      </p>

      <div className="space-y-5">
        <Section label="graduating">
          <p>may 2026 · open to full-time swe / mle roles</p>
          <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>requires opt / h-1b sponsorship</p>
        </Section>

        <Section label="what i build">
          <p>ml pipelines · backend apis · multi-agent ai systems</p>
        </Section>

        <Section label="where i've done it">
          <p>kohler co · bosch · waggoner financial · elsamex · msu</p>
        </Section>

        <Section label="fun stuff">
          <ul className="space-y-1">
            <li>🏊&nbsp; national-level competitive swimmer</li>
            <li>🏠&nbsp; resident assistant for 50 students</li>
            <li>📱&nbsp; built an app 20,000 people actually use</li>
            <li>🎓&nbsp; 7x dean&apos;s list </li>
            <li>🧠&nbsp; cognitive science minor because i think about how people think</li>
          </ul>
        </Section>

        <Section label="looking for">
          <p>swe · mle · data engineering · anywhere</p>
          <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>open to relocate</p>
        </Section>

        <Section label="contact">
          <a href="mailto:kadianva@msu.edu" className="block hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.75)" }}>
            kadianva@msu.edu
          </a>
          <a href="https://linkedin.com/in/vanshika-kadian" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
            linkedin.com/in/vanshika-kadian
          </a>
          <a href="https://github.com/vanshikadian" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
            github.com/vanshikadian
          </a>
        </Section>
      </div>
    </div>
  );
}
