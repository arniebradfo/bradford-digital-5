import { HomeHeader } from "./views/HomeHeader";
import { ProjectLinks } from "./views/ProjectLinks";
import style from "./page.module.css";
import { Footer } from "./views/Footer";

export default function Home() {
  return (
    <div className={style.Layout}>
      <HomeHeader />
      <main>
        <ProjectLinks />
      </main>
      <Footer/>
    </div>
  );
}
