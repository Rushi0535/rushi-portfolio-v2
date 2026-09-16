import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { SparkleIcon } from "@/lib/icons";

export default function AIPage() {
  return (
    <PageShell
      icon={SparkleIcon}
      title="Rushi's AI"
      subtitle="An AI assistant trained on my background — ask it anything."
    >
      <Card>
        <p className="text-text-secondary">Assistant coming soon.</p>
      </Card>
    </PageShell>
  );
}
