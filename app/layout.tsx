import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./reset.css";
import "./globals.css";
import { jCN } from "./utils/joinClassNames";

const PlexSans = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--plex-font-family-sans",
});
const PlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--plex-font-family-mono",
});

export const metadata: Metadata = {
  title: "James Bradford / UX Engineer",
  description:
    "James Bradford is UX Engineer (User Research, UX Design, and UI Development) currently working in the Human Centered Computing Group at Pacific Northwest National Laboratory's Seattle Office making web apps for cybersecurity, geospatial analysis, machine learning, and data visualization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jCN([PlexSans.variable, PlexMono.variable])}>
      <body>{children}</body>
    </html>
  );
}
