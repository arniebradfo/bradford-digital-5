import { Footer } from "../views/Footer";
import { Header } from "../views/Header";

export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <article>{children}</article>
      </main>
      <Header style={{ borderBottom: "var(--border-1)" }} />
      <Footer />
    </>
  );
}
