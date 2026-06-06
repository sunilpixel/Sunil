import "./globals.css";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

/* next/font self-hosts the files; the CSS variables below are mapped into
   Tailwind's theme (see globals.css @theme) as --font-display/body/mono. */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hanken",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Sunil — Frontend Developer · Portfolio",
  description:
    "Frontend developer crafting performant, animated, production-grade web experiences with Next.js, React & GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
