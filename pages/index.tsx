import Image from "next/image";

const Home = () => (
  <main>
  <h1 css={{
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

export default Home;
