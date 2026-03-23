import Desktop from "@/components/Desktop";
import MobileView from "@/components/MobileView";

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      {/* Desktop — hidden on small screens */}
      <div className="hidden md:block" style={{ width: "100%", height: "100%" }}>
        <Desktop />
      </div>
      {/* Mobile fallback */}
      <div className="block md:hidden" style={{ width: "100%", height: "100%" }}>
        <MobileView />
      </div>
    </main>
  );
}
