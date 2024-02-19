import AvyMapMockupDesktop from "../public/lfs-media/AvyMap_Mockup-Desktop.png";
import { HomeHeader } from "./views/HomeHeader";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <main>
        {/* <Image
        src={AvyMapMockupDesktop}
        alt="AvyMap app"
        sizes="(max-width: 1000px) 100vw, 1000px"
        placeholder="blur"
      /> */}
      </main>
    </div>
  );
}
