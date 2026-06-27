import { Mail, SquareArrowOutUpRight } from "lucide-react";
import { useExternalLink } from "./hooks/useExternalLink";
import { useModal } from "./hooks/useModal";
import { ExternalLinkDialog } from "./components/ExternalLinkDialog";
import { LabsDialog } from "./components/LabsDialog";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";

const App = () => {
  const { pendingUrl, openDialog, closeDialog, confirm } = useExternalLink();
  const labsModal = useModal();

  return (
    <div className="flex justify-center min-h-screen px-[clamp(1.5rem,4vw,4rem)] py-[clamp(0.8rem,8vw,6rem)] selection:bg-white/20 selection:text-white">
      <div className="flex flex-col w-full max-w-[min(90vw,42rem)]">
        <header className="flex items-center pb-6">
          <img src="/astrl.png" alt="astrl" className="w-12 h-12" />
        </header>

        <main className="flex-1 flex flex-col items-center justify-start md:justify-center space-y-4 pt-4 md:pt-0 pb-8">
          <section className="pb-4 text-white/70 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed space-y-4">
            <p>
              Hi, I'm Furkan. a full-stack developer and DevOps-focused engineer
              based in Turkey. I'm{" "}
              <span className="line-through text-white/25">
                graduating soon and
              </span>{" "}
              actively building experience through hands-on projects. I enjoy
              developing reliable, scalable applications and working across both
              development and deployment to deliver complete solutions.
            </p>
            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                achievement unlocked
              </div>
              <img
                src="/achievement.png"
                alt="Achievement Made: The End?"
                className="w-full max-w-[clamp(240px,70vw,300px)] border border-white/10 rounded-sm"
              />
            </div>
          </section>

          <section className="pt-8 border-t border-white/20 space-y-6 w-full">
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.href}
                  project={project}
                  onExternalClick={openDialog}
                />
              ))}
            </div>
          </section>
        </main>

        <footer className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/20 text-sm text-white/50">
          <a
            href="https://github.com/astrlme"
            className="flex items-center gap-2 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              openDialog("https://github.com/astrlme");
            }}
          >
            <SquareArrowOutUpRight className="w-4" /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/furkan-k%C3%BC%C3%A7%C3%BCko%C4%9Flu-a98413343/"
            className="flex items-center gap-2 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              openDialog(
                "https://www.linkedin.com/in/furkan-k%C3%BC%C3%A7%C3%BCko%C4%9Flu-a98413343/",
              );
            }}
          >
            <SquareArrowOutUpRight className="w-4" /> LinkedIn
          </a>

          <a
            href="mailto:contact@astrl.me"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4" /> Email
          </a>

          <a
            href="https://labs.astrl.me"
            className="sm:ml-auto flex items-center gap-2 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              labsModal.open();
            }}
          >
            <SquareArrowOutUpRight className="w-4" /> Labs
          </a>
        </footer>
      </div>

      <ExternalLinkDialog
        url={pendingUrl}
        onClose={closeDialog}
        onConfirm={confirm}
      />

      <LabsDialog open={labsModal.isOpen} onClose={labsModal.close} />
    </div>
  );
};

export default App;
