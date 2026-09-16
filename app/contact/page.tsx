import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { MailIcon } from "@/lib/icons";

export default function ContactPage() {
  return (
    <PageShell
      icon={MailIcon}
      title="Contact Me"
      subtitle="Get in touch — I'm always open to interesting conversations."
    >
      <Card>
        <p className="text-text-secondary">Contact form coming soon.</p>
      </Card>
    </PageShell>
  );
}
