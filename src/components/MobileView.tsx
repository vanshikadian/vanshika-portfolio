export default function MobileView() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center px-8 gap-6"
      style={{ background: "#1a1a2e", color: "rgba(255,255,255,0.85)" }}
    >
      <div className="text-4xl mb-2">🖥️</div>
      <h1 className="font-cormorant italic text-3xl text-white">Best viewed on desktop</h1>
      <p className="font-instrument text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", maxWidth: "280px" }}>
        This portfolio is a macOS-style desktop experience. Open it on a larger screen for the full thing.
      </p>
      <div className="flex gap-6 mt-2">
        <a
          href="https://github.com/vanshikadian"
          target="_blank"
          rel="noopener noreferrer"
          className="font-instrument text-[14px] underline underline-offset-2"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/vanshika-kadian"
          target="_blank"
          rel="noopener noreferrer"
          className="font-instrument text-[14px] underline underline-offset-2"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:kadianva@msu.edu"
          className="font-instrument text-[14px] underline underline-offset-2"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Email
        </a>
      </div>
    </div>
  );
}
