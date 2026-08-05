import Link from "next/link";
import Image from "next/image";
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
  headerImage: string | null;
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
    const imageMatch = content.match(/src:\s*"([^"]+)"/);

    posts.push({
      slug,
      title: headerMatch ? headerMatch[1] : slug,
      date: subHeaderMatch ? subHeaderMatch[1] : "",
      description: descriptionMatch ? descriptionMatch[1] : "",
      headerImage: imageMatch ? imageMatch[1] : null,
    });
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export default function ArchivesPage() {
  const posts = getArchivePosts();

  return (
    <main style={{ paddingBottom: "4rem" }}>
      <PageHeader
        header="Archive Portfolio"
        subHeader={`${posts.length} Historical Projects`}
        description="Design portfolio projects, case studies, and artwork migrated from Gatsby."
      />

      <Layouts.ArticleWrapper>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
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
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {post.headerImage && !post.headerImage.endsWith(".mp4") ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src={post.headerImage}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "190px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Txt fg={3} size={5}>
                    {post.title}
                  </Txt>
                </div>
              )}

              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.8rem", opacity: 0.6, marginBottom: "0.4rem" }}>
                  {post.date}
                </div>
                <H2 style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0", lineHeight: 1.3 }}>
                  <Txt>{post.title}</Txt>
                </H2>
                <P style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "auto", lineClamp: 3, WebkitLineClamp: 3, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {post.description}
                </P>
              </div>
            </Link>
          ))}
        </div>
      </Layouts.ArticleWrapper>
    </main>
  );
}
