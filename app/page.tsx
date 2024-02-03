import Image from "next/image";
import AvyMapMockupDesktop from "../public/lfs-media/AvyMap_Mockup-Desktop.png";
import { Button } from "./components/Button";
import { Button2 } from "./components/Button2";
import { Button3 } from "./components/Button3";

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
        gap: 80
      }}
    >
      <Button3>Mixed Parallax</Button3>
      <Button2>Move to Parallax</Button2>
      <Button>Expand Parallax</Button>
      {/* <h1
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
        <span>bradford.digital</span>
      </h1>
      <Image
        src={AvyMapMockupDesktop}
        alt="AvyMap app"
        sizes="(max-width: 1000px) 100vw, 1000px"
        placeholder="blur"
      /> */}
    </main>
  );
}
