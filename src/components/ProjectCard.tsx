import { Project } from "../common";

interface ProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      key={index}
      className="flex flex-row gap-2 p-1 border border-secondary shadow-sm w-1/4"
      style={{
        //backgroundColor: index % 2 === 0 ? "#F9F9F9" : "white",
        borderRadius: "6px",
        padding: "1rem",
      }}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">{project.title}</h3>
        <p className="text-xs">{project.description}</p>
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href={project.link}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
