import { PageHeader } from "../components/PageHeader";
import { cx } from "../utils/joinClassNames";
import { Footer } from "../views/Footer";
import { Header } from "../views/Header";
import style from "./layout.module.css";

export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main
        className={cx(
          // style.ArticleMain
        )}
      >
        <article>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
