import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/card";
import { DriveEmbed } from "@/components/drive-embed";
import { AwardIcon } from "@/lib/icons";
import { certificateCategories } from "@/lib/content/certificates";

export default function CertificatesPage() {
  return (
    <PageShell icon={AwardIcon} title="Certificates" subtitle="Courses and certifications I've completed.">
      {certificateCategories.map((category) => (
        <Card key={category.title} className="flex flex-col gap-4">
          <h3 className="font-display text-base font-semibold text-text-primary">{category.title}</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {category.urls.map((url, i) => (
              <DriveEmbed key={url} src={url} title={`${category.title} ${i + 1}`} height={220} />
            ))}
          </div>
        </Card>
      ))}
    </PageShell>
  );
}
