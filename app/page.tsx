import Image from "next/image";
import AvyMapMockupDesktop from "../public/lfs-media/AvyMap_Mockup-Desktop.png";
import { Button } from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        margin: "0 auto",
        maxWidth: 1000,
        padding: 80,
        display: "flex",
        flexDirection: 'column',
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
      }}
    >

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          alignItems: "center",
          padding: 64,
        }}
      >
        <Image
          src="/logo/hexagon.inline.svg"
          alt="Vercel Logo"
          width={16 * 3}
          height={16 * 3}
          priority
        />{" "}
        <span>James Bradford / UX Engineer</span>
      </h1>
      <p>
        <Link href={'/components'}>Components</Link>
      </p>
      {/* <Image
        src={AvyMapMockupDesktop}
        alt="AvyMap app"
        sizes="(max-width: 1000px) 100vw, 1000px"
        placeholder="blur"
      /> */}
    </main>
  );
}
