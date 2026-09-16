import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { MicIcon } from "@/lib/icons";

export default function TalksPage() {
  return (
    <PageShell
      icon={MicIcon}
      title="Talks & Events"
      subtitle="Conference talks, workshops, and events I've spoken at or attended."
    >
      <Card>
        <p className="text-text-secondary">Talks and events coming soon.</p>
      </Card>
    </PageShell>
  );
}
