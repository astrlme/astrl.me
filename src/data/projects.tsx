import { Server } from "lucide-react";
import type { JSX } from "react";

export interface Project {
  title: string;
  description: string;
  href: string;
  external: boolean;
  comingSoon?: boolean;
}

export const projectIcons: Record<string, JSX.Element> = {
  "Astra Bot": <Server className="w-4 h-4 text-white/50" />,
};

export const projects: Project[] = [
  {
    title: "Astra Bot",
    description:
      "High-availability Discord moderation and analytics platform. Built for global scale with flexible hybrid, serverless, and edge runtime deployments.",
    href: "https://bot.astrl.me",
    external: false,
    comingSoon: true,
  },
  {
    title: "Coming Soon (Eventually)",
    description:
      "Another incredibly cool project that I'm working on. Stay tuned for updates!",
    href: "#",
    external: false,
    comingSoon: true,
  },
];
