import { HomeHeader } from "./views/HomeHeader";
import { ProjectLinksSection } from "./views/ProjectLinksSection";
// import { ProjectFeatureSection } from "./views/ProjectFeatureSection";
import style from "./page.module.css";
import { Footer } from "./views/Footer";

export default function Home() {
  return (
    <div className={style.Layout}>
      <HomeHeader />
      <main>
        <ProjectLinksSection />
        {/* <ProjectFeatureSection /> */}
      </main>
      <Footer/>
    </div>
  );
}
