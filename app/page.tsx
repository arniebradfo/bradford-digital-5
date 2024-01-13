import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
        alignItems: 'center',
        padding: 64
      }}>
        <Image
          src="/logo/hexagon.inline.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={16*3}
          height={16*3}
          priority
        />{" "}
        <span>bradford.digital</span>
      </h1>
    </main>
  );
}
