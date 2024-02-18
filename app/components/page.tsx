import Link from "next/link";
import { LinkButton } from "./LinkButton";

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
      <LinkButton href={'#'}>Parallax</LinkButton>
      <LinkButton href={'#'}>Parallax</LinkButton>
      <LinkButton href={'#'}>Parallax</LinkButton>
      <LinkButton href={'/'}>Home</LinkButton>
    </div>
  );
}
