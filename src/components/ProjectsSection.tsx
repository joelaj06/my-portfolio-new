import { projects } from "../common";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => (
  <div>
    <h2 className="text-xl font-bold">🚀 Featured Projects</h2>
    <div className="flex flex-row gap-1 flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} />
      ))}
    </div>
  </div>
);

export default ProjectsSection;
