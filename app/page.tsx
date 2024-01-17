import Image from "next/image";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <main style={{ margin: "0 auto", maxWidth: 1000 }}>
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
        <span>bradford.digital</span>
      </h1>
      <img src="/lfs-media/AvyMap_Mockup-Desktop.png" alt="AvyMap app" />
    </main>
  );
}
