import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { DocumentIcon } from "@/lib/icons";

export default function BlogsPage() {
  return (
    <PageShell
      icon={DocumentIcon}
      title="Blogs & Articles"
      subtitle="Writing on AI/ML, research notes, and engineering deep-dives."
    >
      <Card>
        <p className="text-text-secondary">Posts coming soon.</p>
      </Card>
    </PageShell>
  );
}
