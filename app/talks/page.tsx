"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { TabBar, type Tab } from "@/components/tab-bar";
import { Card } from "@/components/card";
import { Tag } from "@/components/tag";
import { ExternalLink } from "@/components/external-link";
import { DriveEmbed } from "@/components/drive-embed";
import { MicIcon } from "@/lib/icons";
import { talksIntro, myTalks, organisedEvents, curationPhotos } from "@/lib/content/talks";

const tabs: Tab[] = [
  { id: "my-talks", label: "My Talks" },
  { id: "organised-events", label: "Organised Events" },
  { id: "curation", label: "Curation" },
];

export default function TalksPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <PageShell
      icon={MicIcon}
      title="Talks & Events"
      subtitle="Conference talks, workshops, and events I've spoken at or attended."
      tabs={
        <div className="flex flex-col gap-6">
          <Card className="flex flex-col gap-2">
            <p className="text-sm text-text-secondary">{talksIntro.lead}</p>
            <blockquote className="border-l-2 border-accent pl-4 text-sm italic text-text-primary">
              &ldquo;{talksIntro.quote}&rdquo;
              <span className="mt-1 block font-mono text-xs not-italic text-text-secondary">
                — {talksIntro.attribution}
              </span>
            </blockquote>
            <p className="text-sm leading-relaxed text-text-secondary">{talksIntro.body}</p>
          </Card>
          <TabBar tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
        </div>
      }
    >
      {activeTab === "my-talks" && (
        <>
          {myTalks.map((talk) => (
            <Card key={talk.title} className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-wide text-accent">{talk.date}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{talk.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{talk.description}</p>
              <ExternalLink href={talk.reportUrl} className="w-fit font-mono text-xs">
                Read Full Report →
              </ExternalLink>
              <div className="flex flex-wrap gap-3">
                {talk.photos.map((photo, i) => (
                  <DriveEmbed
                    key={photo}
                    src={photo}
                    title={`${talk.title} photo ${i + 1}`}
                    height={140}
                    className="w-40"
                  />
                ))}
              </div>
            </Card>
          ))}
        </>
      )}

      {activeTab === "organised-events" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {organisedEvents.map((event) => (
            <Card key={event.name} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Tag>{event.type}</Tag>
                <span className="font-mono text-xs text-text-secondary">{event.date}</span>
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary">{event.name}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{event.description}</p>
              <span className="font-mono text-xs text-text-secondary">{event.participants} participants</span>
              <ExternalLink href={event.reportUrl} className="w-fit font-mono text-xs">
                Event Report →
              </ExternalLink>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "curation" && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {curationPhotos.map((photo, i) => (
            <DriveEmbed key={photo} src={photo} title={`Curation photo ${i + 1}`} height={200} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
