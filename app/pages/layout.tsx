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
      <Header style={{borderBottom:'var(--border-1)'}} />
      {/* <hr style={{marginInline:'var(--column-padding)', maxWidth:'calc(var(--column-max) - var(--column-padding) * 2)', margin:'0 auto'}} /> */}
      {/* <Footer style={{marginTop:'calc(var(--column-padding) * -.75)'}} /> */}
      <Footer />
    </>
  );
}
