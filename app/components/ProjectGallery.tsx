import Link from "next/link";
import { Project } from "../data/projects";
import { H2, P, Txt } from "./Text";
import style from "./ProjectGallery.module.css";
import { cx } from "../utils/joinClassNames";

interface ProjectGalleryProps {
  projects: Project[];
  className?: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects,
  className,
}) => {
  if (projects.length === 0) {
    return (
      <div className={cx(style.EmptyWrapper, className)}>
        <Txt fg={3} size={4}>
          No projects found for this category.
        </Txt>
      </div>
    );
  }

  return (
    <section className={cx(style.GalleryWrapper, className)}>
      {projects.map((project) => {
        const isVideo = project.headerImage?.endsWith(".mp4");

        return (
          <Link
            key={project.slug}
            href={project.href}
            className={style.PanelRow}
          >
            <div className={style.PanelInner}>
              <div className={style.MediaWrapper}>
                {project.headerImage && !isVideo ? (
                  <img
                    src={project.headerImage}
                    alt={project.title}
                    className={style.MediaImage}
                    loading="lazy"
                  />
                ) : isVideo ? (
                  <video
                    src={project.headerImage!}
                    className={style.MediaVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className={style.PlaceholderMedia}>
                    <Txt fg={3} size={5}>
                      {project.title}
                    </Txt>
                  </div>
                )}
              </div>

              <div className={style.Content}>
                <div className={style.Meta}>
                  <span className={style.DateText}>{project.date}</span>
                  <div className={style.TagBadgeList}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={style.TagBadge}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <H2 className={style.Title}>
                  <Txt fg={1}>{project.title}</Txt>
                </H2>

                <P className={style.Description} fg={2} size={5}>
                  {project.description}
                </P>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

