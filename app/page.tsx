import Image from "next/image";
import AvyMapMockupDesktop from "../public/lfs-media/AvyMap_Mockup-Desktop.png";
import Link from "next/link";
import { externalLinkAttributes } from "./utils/link";

export default function Home() {
  return (
    <div>
      <header>
        <Image
          src="/logo/small.svg"
          alt="jb logo"
          width={16 * 3}
          height={16 * 3}
          priority
        />
        <h1>James Bradford / UX Engineer</h1>
        <p>
          Currently working in the{" "}
          <Link
            href={"https://www.pnnl.gov/visual-analytics"}
            {...externalLinkAttributes}
          >
            Human Centered Computing Group
          </Link>{" "}
          at{" "}
          <Link href={"https://www.pnnl.gov/"} {...externalLinkAttributes}>
            Pacific Northwest National Laboratory
          </Link>{" "}
          making web apps for cybersecurity, geospatial, machine learning, and
          data visualization.
        </p>
        <nav>
          {[
            {
              children: "LinkedIn",
              href: "https://www.linkedin.com/in/arniebradfo/",
              ...externalLinkAttributes,
            },
            {
              children: "GitHub",
              href: "https://github.com/arniebradfo",
              ...externalLinkAttributes,
            },
            {
              children: "Figma",
              href: "https://www.figma.com/@arniebradfo",
              ...externalLinkAttributes,
            },
            {
              children: "Resume",
              href: "#",
            },
            {
              children: "FUN!",
              href: "/components",
            },
          ].map((linkProps, i) => (
            <>
              {i > 0 && <span>/</span>}
              <Link {...linkProps} />
            </>
          ))}
        </nav>
      </header>
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
