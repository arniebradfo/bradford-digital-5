import { HomeHeader } from "./views/HomeHeader";
import { PluginLinksSection, ProjectLinksSection } from "./views/ProjectLinksSections";
import { ProjectFeatureSection, sections } from "./views/ProjectFeatureSections";
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
        <ProjectFeatureSection {...sections.redeye} />
        <ProjectFeatureSection {...sections.hydropowerELibrary} />
        <ProjectFeatureSection {...sections.irrigationViz} />
        <ProjectFeatureSection {...sections.avyMap} />
      </main>
      <Footer/>
    </div>
  );
}
