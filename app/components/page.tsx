import Link from "next/link";
import { LinkButton } from "./LinkButton";
import style from "./LinkButton.module.css";

export default function Page() {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1000,
        padding: 80,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <LinkButton className={style.LinkButtonTestInside} href={'#'}>Parallax</LinkButton>
      <LinkButton className={style.LinkButtonTestInside} href={'#'}>Parallax Parallax Parallax Parallax Parallax Parallax</LinkButton>
      <LinkButton className={style.LinkButtonTestInside} href={'#'}>Parallax</LinkButton>
      <LinkButton className={style.LinkButtonTestInside} href={'/'}>Home</LinkButton>
    </div>
  );
}
