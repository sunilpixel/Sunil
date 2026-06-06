export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div>
          <span className="eyebrow reveal">About</span>
          {/* heading reveals line-by-line via GSAP mask */}
          <h2>
            <span className="line">
              <span>
                I build the <em>front of</em>
              </span>
            </span>
            <span className="line">
              <span>
                <em>the internet</em> — pixel-precise,
              </span>
            </span>
            <span className="line">
              <span>performant &amp; alive with motion.</span>
            </span>
          </h2>
        </div>

        <div className="about-copy">
          <p className="reveal">
            I&apos;ve delivered{" "}
            <strong className="text-accent font-semibold">120+ projects</strong>{" "}
            — production sites and web apps for contractors, hypercar dealers,
            telemedicine platforms, drink brands and real-estate marketplaces. My
            focus is the craft layer: clean component architecture, buttery
            scroll &amp; transition design, and Lighthouse scores that actually
            hold up.
          </p>
          <p className="reveal">
            I translate Figma into responsive, accessible code, then bring it to
            life with considered animation that supports the story instead of
            fighting it.
          </p>

          <div className="stats">
            <div className="stat reveal">
              <div className="num">
                <span data-count="120">0</span>
                <span className="pct">+</span>
              </div>
              <div className="lbl">Projects delivered</div>
            </div>
            <div className="stat reveal">
              <div className="num">
                <span data-count="7">0</span>
                <span className="pct">+</span>
              </div>
              <div className="lbl">Industries served</div>
            </div>
            <div className="stat reveal">
              <div className="num">
                <span data-count="100">0</span>
                <span className="pct">%</span>
              </div>
              <div className="lbl">Hand-coded UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
