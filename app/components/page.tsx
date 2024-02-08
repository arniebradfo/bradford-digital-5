import Link from "next/link";
import { Button } from "./Button";

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
      <Button>Parallax</Button>
      <Button>Parallax</Button>
      <Button>Parallax</Button>
      <p>
        <Link href={'/'}>Home</Link>
      </p>
    </div>
  );
}
