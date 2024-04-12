import { HomeHeader } from "./views/HomeHeader";
import { PluginLinksSection, ProjectLinksSection } from "./views/ProjectLinksSections";
import { ProjectFeatureSection } from "./views/ProjectFeatureSection";
import style from "./page.module.css";
import { Footer } from "./views/Footer";
import { cx } from "./utils/joinClassNames";

export default function Home() {
  return (
    <div className={style.Layout}>
      <HomeHeader />
      <main className={cx(style.SectionLayout)}>
        <PluginLinksSection />
        <ProjectLinksSection />
        <ProjectFeatureSection />
      </main>
      <Footer/>
    </div>
  );
}
