import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { FolderIcon } from "@/lib/icons";

export default function ProjectsPage() {
  return (
    <PageShell
      icon={FolderIcon}
      title="Projects"
      subtitle="Selected projects across AI, ML, and software engineering."
    >
      <Card>
        <p className="text-text-secondary">Projects coming soon.</p>
      </Card>
    </PageShell>
  );
}
