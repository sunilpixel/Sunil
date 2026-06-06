import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <span className="eyebrow reveal">Let&apos;s talk</span>
        <h2 className="reveal">
          Have a project <em>in mind?</em>
        </h2>
        <a href="mailto:hello@sunil.dev" className="mail magnetic" data-cursor>
          hello@sunil.dev
        </a>
        {/* container styled inline with Tailwind utilities; each link uses
            the @apply-based .social-link class */}
        <div className="reveal flex flex-wrap justify-center gap-8 mt-12">
          <Link href="#" className="social-link magnetic" data-cursor>GitHub</Link>
          <Link href="#" className="social-link magnetic" data-cursor>LinkedIn</Link>
          <Link href="#" className="social-link magnetic" data-cursor>Twitter / X</Link>
          <Link href="#" className="social-link magnetic" data-cursor>Dribbble</Link>
        </div>
      </section>

      <footer>
        <span>© 2026 Sunil — Frontend Developer</span>
        <span>Built with Next.js &amp; GSAP · Punjab, IN</span>
      </footer>
    </>
  );
}
