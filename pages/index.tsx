import Image from "next/image";

const Home = () => (
  <main css={{margin: '0 auto', maxWidth:1000}}>
    <h1
      css={{
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
    <img
      src="/lfs-media/AvyMap_Mockup-Desktop.png"
      alt="AvyMap app"
    />
  </main>
);

export default Home;
