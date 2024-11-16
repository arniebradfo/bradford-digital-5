import { ComponentProps } from "react";
import { Layouts } from "../Layouts";
import { Txt } from "@/app/components/Text";
import Link from "next/link";

export const GalleryNote = (props: ComponentProps<typeof Layouts.Note>) => (
  <Layouts.Note {...props}>
    <Txt tag="h6" size={6} fg={1} bold>
      NOTE: This is a Gallery, Not a Case Study
    </Txt>
    <Txt tag="p">
      This post includes minimal context related to my UX process or software
      development and primarily showcases a gallery of final design artifacts.
      For a detailed post including process, reasoning, and decision-making,
      please see the <Link href="/pages/RedEye">RedEye</Link> or{" "}
      <Link href="/pages/Hydropower-eLibrary">Hydropower eLibrary</Link> case
      studies.
    </Txt>
  </Layouts.Note>
);
