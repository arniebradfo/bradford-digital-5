import { getAllProjects } from "../data/projects";
import { PageHeader } from "../components/PageHeader";
import { TagNav } from "../components/TagNav";
import { ProjectGallery } from "../components/ProjectGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Work / James Bradford",
  description:
    "A comprehensive collection of design, engineering, software, and creative projects.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        header="All Work"
        subHeader={`${projects.length} Projects`}
        description="A comprehensive collection of design, engineering, software, and creative projects across PNNL, ASI, Bestway, Freelance, and personal explorations."
      />
      <TagNav activeTag="all" />
      <ProjectGallery projects={projects} />
    </>
  );
}
