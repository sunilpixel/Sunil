import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <Link href="#top" className="brand magnetic">
        <span className="dot" /> SUNIL.DEV
      </Link>
      <nav className="links">
        <Link href="#work" className="magnetic" data-cursor>Work</Link>
        <Link href="#about" className="magnetic" data-cursor>About</Link>
        <Link href="#stack" className="magnetic" data-cursor>Stack</Link>
        <Link href="#contact" className="magnetic" data-cursor>Contact</Link>
      </nav>
    </header>
  );
}
