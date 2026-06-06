export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* drifting aurora blobs (animated in page.js) */}
      <div className="hero-bg" id="heroBg">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="hero-top">
        <span className="eyebrow reveal">Frontend Developer — Est. 2025</span>
      </div>

      <h1 id="heroTitle">
        <span className="word">Building</span>{" "}
        <span className="word accent">fluid</span>{" "}
        <span className="word">web</span>
        <br />
        <span className="word">experiences.</span>
      </h1>

      <div className="hero-meta">
        <p className="reveal">
          I&apos;m a frontend developer turning ambitious designs into fast,
          accessible, motion-rich interfaces — built with Next.js, React &amp;
          GSAP across SaaS, luxury, healthcare &amp; commerce.
        </p>
        <span className="avail reveal">
          <span className="pulse" /> Available for new work
        </span>
      </div>
    </section>
  );
}
