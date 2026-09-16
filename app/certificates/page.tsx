import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { Placeholder } from "@/components/placeholder";
import { AwardIcon } from "@/lib/icons";
import { certificateCategories } from "@/lib/content/certificates";

export default function CertificatesPage() {
  return (
    <PageShell icon={AwardIcon} title="Certificates" subtitle="Courses and certifications I've completed.">
      {certificateCategories.map((category) => (
        <Card key={category.title} className="flex flex-col gap-4">
          <h3 className="font-display text-base font-semibold text-text-primary">{category.title}</h3>
          {/* TODO: certificate name, date, image — none exist in the source content yet */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: category.count }).map((_, i) => (
              <Placeholder key={i} label="Certificate — coming soon" className="aspect-[4/3]" />
            ))}
          </div>
        </Card>
      ))}
    </PageShell>
  );
}
