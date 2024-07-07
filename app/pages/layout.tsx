export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>Page / Layout / Files</nav>
      {children}
    </section>
  );
}
