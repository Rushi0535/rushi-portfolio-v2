import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { Tag } from "@/components/tag";
import { FolderIcon } from "@/lib/icons";
import { projects } from "@/lib/content/projects";

export default function ProjectsPage() {
  return (
    <PageShell
      icon={FolderIcon}
      title="Projects"
      subtitle="Selected projects across AI, ML, and software engineering."
    >
      {projects.map((project) => (
        <Card key={project.title} className="flex flex-col gap-4">
          <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>
          <p className="text-sm leading-relaxed text-text-secondary">{project.description}</p>
          <p className="font-mono text-xs text-text-secondary">
            Database: {project.database} · Language: {project.language}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          {/* TODO: real repo link — was pointing to generic profile, needs actual repo URL */}
          <span
            title="GitHub repo link coming soon"
            className="inline-flex w-fit items-center gap-2 rounded-card border border-dashed border-border bg-bg px-3 py-2 font-mono text-xs text-text-secondary"
          >
            GitHub — coming soon
          </span>
        </Card>
      ))}
    </PageShell>
  );
}
