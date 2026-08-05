import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { Layouts } from "../pages/Layouts";
import { H2, P, Txt } from "../components/Text";
import fs from "fs";
import path from "path";

interface ArchivePost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function getArchivePosts(): ArchivePost[] {
  const archivesDir = path.join(process.cwd(), "app/archives");
  if (!fs.existsSync(archivesDir)) return [];

  const folders = fs.readdirSync(archivesDir).filter((f) => {
    const fullPath = path.join(archivesDir, f);
    return fs.statSync(fullPath).isDirectory();
  });

  const posts: ArchivePost[] = [];

  for (const slug of folders) {
    const pagePath = path.join(archivesDir, slug, "page.mdx");
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, "utf-8");
    const headerMatch = content.match(/header:\s*"([^"]+)"/);
    const subHeaderMatch = content.match(/subHeader:\s*"([^"]+)"/);
    const descriptionMatch = content.match(/description:\s*"([^"]+)"/);

    posts.push({
      slug,
      title: headerMatch ? headerMatch[1] : slug,
      date: subHeaderMatch ? subHeaderMatch[1] : "",
      description: descriptionMatch ? descriptionMatch[1] : "",
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export default function ArchivesPage() {
  const posts = getArchivePosts();

  return (
    <main style={{ paddingBottom: "4rem" }}>
      <PageHeader
        header="Archive Portfolio"
        subHeader={`${posts.length} Projects`}
        description="Historical design portfolio projects, case studies, and artwork migrated from Gatsby."
      />

      <Layouts.ArticleWrapper>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/archives/${post.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                transition: "transform 0.2s, border-color 0.2s",
              }}
            >
              <div style={{ fontSize: "0.85rem", opacity: 0.6, marginBottom: "0.5rem" }}>
                {post.date}
              </div>
              <H2 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem 0" }}>
                <Txt>{post.title}</Txt>
              </H2>
              <P style={{ fontSize: "0.9rem", opacity: 0.8, lineClamp: 3, WebkitLineClamp: 3, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {post.description}
              </P>
            </Link>
          ))}
        </div>
      </Layouts.ArticleWrapper>
    </main>
  );
}
