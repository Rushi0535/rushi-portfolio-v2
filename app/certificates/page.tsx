import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { AwardIcon } from "@/lib/icons";

export default function CertificatesPage() {
  return (
    <PageShell
      icon={AwardIcon}
      title="Certificates"
      subtitle="Courses and certifications I've completed."
    >
      <Card>
        <p className="text-text-secondary">Certificates coming soon.</p>
      </Card>
    </PageShell>
  );
}
