import { SKILLS } from "@/lib/data";

export default function Stack() {
  return (
    <section className="stack" id="stack">
      <span className="eyebrow reveal">Capabilities</span>
      <h2 className="reveal">
        The tools I reach for to ship <em>distinctive</em> interfaces.
      </h2>
      <div className="stack-grid">
        {SKILLS.map(([idx, name, sub]) => (
          <div className="skill reveal" key={idx}>
            <span className="idx">{idx}</span>
            <span className="name">
              {name} <em>{sub}</em>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
