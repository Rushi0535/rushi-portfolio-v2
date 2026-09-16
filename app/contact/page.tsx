import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { ExternalLink } from "@/components/external-link";
import { ContactForm } from "@/components/contact-form";
import { MailIcon } from "@/lib/icons";
import { contactInfo, socialLinks } from "@/lib/content/contact";

export default function ContactPage() {
  return (
    <PageShell
      icon={MailIcon}
      title="Contact Me"
      subtitle="Get in touch — I'm always open to interesting conversations."
    >
      <Card className="flex flex-col gap-3">
        <h3 className="font-display text-base font-semibold text-text-primary">Details</h3>
        <p className="font-mono text-sm text-text-secondary">{contactInfo.phone}</p>
        <p className="font-mono text-sm text-text-secondary">{contactInfo.email}</p>
        <div className="flex flex-wrap gap-4 pt-1">
          {socialLinks.map((link) => (
            <ExternalLink key={link.label} href={link.url} className="font-mono text-xs">
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </Card>

      <Card>
        <ContactForm />
      </Card>
    </PageShell>
  );
}
