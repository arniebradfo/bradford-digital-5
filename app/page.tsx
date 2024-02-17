import Image from "next/image";
import AvyMapMockupDesktop from "../public/lfs-media/AvyMap_Mockup-Desktop.png";
import Link from "next/link";
import { externalLinkAttributes } from "./utils/link";
import { Txt } from "./components/Text";
import { Spacer } from "./components/Spacer";

export default function Home() {
  return (
    <div>
      <header style={{ padding: 48, position: "relative" }}>
        <Image
          src="/logo/small.svg"
          alt="jb logo"
          width={16 * 3}
          height={16 * 3}
          priority
          style={{ marginBottom: 48 }}
        />

        <Txt tag="h1" size={2} fg={1} uppercase style={{ marginBottom: 24 }}>
          <Txt>James Bradford</Txt>
          <Spacer normal>/</Spacer>
          <Txt fg={3}>UX Engineer</Txt>
        </Txt>

        <Txt tag="p" style={{ maxWidth: 640 }}>
          <Txt bold>
            User Research
            <Spacer>/</Spacer>
            UX Design
            <Spacer>/</Spacer> UI Development
          </Txt>
          <Spacer>-</Spacer>
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
          </Link>
          {"'s "}
          Seattle Office making web apps for cybersecurity, geospatial analysis,
          machine learning, and data visualization.
        </Txt>

        <nav style={{ position: "absolute", right: 0, top: 0, margin: 48 }}>
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
              {i > 0 && <Spacer>/</Spacer>}
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
