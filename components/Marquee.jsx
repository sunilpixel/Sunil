import { MARQUEE_ITEMS } from "@/lib/data";

export default function Marquee() {
  // Render the list twice so the GSAP -50% loop is seamless.
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track" id="marquee">
        {loop.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
