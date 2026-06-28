import type { Project } from "../../data/projects";
import { projectIcons } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  onExternalClick: (url: string) => void;
}

export function ProjectCard({ project, onExternalClick }: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.external) {
      e.preventDefault();
      onExternalClick(project.href);
    }
  };

  return (
    <a
      href={project.href}
      onClick={handleClick}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      className="group block p-4 border border-white/10 rounded-lg hover:bg-white/2 transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-medium text-white flex items-center gap-2">
          {projectIcons[project.title]}
          {project.title}
        </h2>
      </div>
      <p className="text-sm text-white/50">{project.description}</p>
    </a>
  );
}
