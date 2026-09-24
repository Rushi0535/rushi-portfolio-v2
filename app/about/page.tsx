"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { TabBar, type Tab } from "@/components/tab-bar";
import { Card } from "@/components/card";
import { Tag } from "@/components/tag";
import { ExternalLink } from "@/components/external-link";
import { BulletList } from "@/components/bullet-list";
import { ProseBlocks } from "@/components/prose-blocks";
import { Timeline } from "@/components/timeline";
import { DriveEmbed } from "@/components/drive-embed";
import { UserIcon } from "@/lib/icons";
import {
  profileTagline,
  profileLines,
  educationEntries,
  educationCoursework,
  educationAchievements,
  testimonialVideoUrl,
  professionalExperience,
  positionsOfResponsibility,
  technicalSkillCategories,
  nonTechnicalSkills,
  languageSkills,
  researchExperience,
  volunteershipIntro,
  gdgEvents,
  otherVolunteering,
  volunteeringSkills,
  presentationsIntro,
  presentations,
  journeyIntro,
  journeyPhases,
  journeyNarrative,
} from "@/lib/content/about";

// otherVolunteering titles are written as "Org Name — Role Summary"; split
// on that separator instead of hardcoding a duplicate summary string.
function splitOrgTitle(title: string): { name: string; role: string } {
  const [name, role] = title.split(" — ");
  return { name, role: role ?? "" };
}

function VolunteerOrgHeader({ title, dateRange, summary }: { title: string; dateRange: string; summary: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-card border border-border bg-accent-soft/40 px-5 py-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl font-semibold text-text-primary">{title}</h3>
        <span className="font-mono text-xs uppercase tracking-wide text-accent">{dateRange}</span>
      </div>
      <p className="font-mono text-xs text-text-secondary">{summary}</p>
    </div>
  );
}

const tabs: Tab[] = [
  { id: "education", label: "Education" },
  { id: "professional-experience", label: "Professional Experience" },
  { id: "position-of-responsibility", label: "Position Of Responsibility" },
  { id: "skills", label: "Skills" },
  { id: "research-experience", label: "Research Experience" },
  { id: "volunteership", label: "Volunteership" },
  { id: "presentations", label: "Presentations" },
  { id: "journey", label: "Journey" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [graduate, undergraduate] = educationEntries;

  return (
    <PageShell
      icon={UserIcon}
      title="About Me"
      subtitle="A quick introduction to who I am and what I work on."
      tabs={
        <div className="flex flex-col gap-6">
          <Card className="flex flex-col gap-4 sm:flex-row sm:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element -- local static asset, next/image not needed */}
            <img
              src="/headshot.jpg"
              alt="Rushi Prajapati"
              className="h-28 w-28 shrink-0 rounded-full border border-border object-cover sm:h-32 sm:w-32"
            />
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-semibold text-text-primary">Rushi Prajapati</h2>
              <p className="text-sm leading-relaxed text-text-secondary">{profileTagline}</p>
              <ul className="flex flex-col gap-1.5">
                {profileLines.map((line, i) => (
                  <li key={i} className="font-mono text-xs text-text-secondary">
                    {line.text}
                    {line.linkText && line.href && <ExternalLink href={line.href}>{line.linkText}</ExternalLink>}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          <TabBar tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
        </div>
      }
    >
      {activeTab === "education" && (
        <>
          <Card className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wide text-accent">{graduate.dateRange}</span>
            <h3 className="font-display text-lg font-semibold text-text-primary">{graduate.degree}</h3>
            <p className="text-sm text-text-secondary">
              <ExternalLink href={graduate.institutionUrl}>{graduate.institution}</ExternalLink> — {graduate.location}
            </p>
            {graduate.status && <p className="text-sm text-text-secondary">Current Status: {graduate.status}</p>}
          </Card>

          <Card className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-accent">{undergraduate.dateRange}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{undergraduate.degree}</h3>
              <p className="text-sm text-text-secondary">
                <ExternalLink href={undergraduate.institutionUrl}>{undergraduate.institution}</ExternalLink> —{" "}
                {undergraduate.location}
              </p>
              {undergraduate.cgpa && <p className="text-sm text-text-secondary">CGPA: {undergraduate.cgpa}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Key Coursework</span>
              <div className="flex flex-wrap gap-2">
                {educationCoursework.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Achievements</span>
              <BulletList items={educationAchievements} />
            </div>
          </Card>

          <Card className="flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold text-text-primary">Testimonial Video</h3>
            <DriveEmbed src={testimonialVideoUrl} title="Testimonial Video" height={420} />
          </Card>
        </>
      )}

      {activeTab === "professional-experience" && (
        <>
          {professionalExperience.map((entry) => (
            <Card key={entry.role} className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-accent">{entry.dateRange}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{entry.role}</h3>
              <p className="font-mono text-xs text-text-secondary">
                <span className="font-medium text-text-primary">
                  {entry.organizationUrl ? (
                    <ExternalLink href={entry.organizationUrl}>{entry.organization}</ExternalLink>
                  ) : (
                    entry.organization
                  )}
                </span>{" "}
                · {entry.location}
              </p>
              {entry.description && (
                <p className="text-sm leading-relaxed text-text-secondary">{entry.description}</p>
              )}
              {entry.bullets.length > 0 && <BulletList items={entry.bullets} />}
              {entry.documentLabel && entry.documentUrl && (
                <ExternalLink href={entry.documentUrl} className="w-fit font-mono text-xs">
                  {entry.documentLabel} →
                </ExternalLink>
              )}
            </Card>
          ))}
        </>
      )}

      {activeTab === "position-of-responsibility" && (
        <>
          {positionsOfResponsibility.map((entry) => (
            <Card key={entry.role + entry.organization} className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-accent">{entry.dateRange}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{entry.role}</h3>
              <p className="font-mono text-xs text-text-secondary">{entry.organization}</p>
              <p className="text-sm leading-relaxed text-text-secondary">{entry.description}</p>
            </Card>
          ))}
        </>
      )}

      {activeTab === "skills" && (
        <>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Technical Skills</span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technicalSkillCategories.map((category) => (
                <Card key={category.title} className="flex flex-col gap-3">
                  <h3 className="font-display text-base font-semibold text-text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold text-text-primary">Non-Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {nonTechnicalSkills.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>

          <Card className="flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold text-text-primary">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languageSkills.map((item) => (
                <Tag key={item.language}>
                  {item.language} · {item.proficiency}
                </Tag>
              ))}
            </div>
          </Card>
        </>
      )}

      {activeTab === "research-experience" && (
        <>
          {researchExperience.map((entry) => (
            <Card key={entry.title} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Tag>{entry.type}</Tag>
                <span className="font-mono text-xs text-text-secondary">
                  {entry.publication} · {entry.releaseDate}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary">{entry.title}</h3>
              {entry.context && <p className="text-sm text-text-secondary">{entry.context}</p>}
              <p className="text-sm leading-relaxed text-text-secondary">{entry.abstract}</p>
              <ExternalLink href={entry.link} className="font-mono text-xs">
                View publication →
              </ExternalLink>
            </Card>
          ))}
        </>
      )}

      {activeTab === "volunteership" && (
        <>
          <div className="flex flex-col gap-4">
            <VolunteerOrgHeader
              title="Google Developer Group (GDG) NYC"
              dateRange="2025 – Present"
              summary="Community Outreach Manager — volunteering position"
            />
            <p className="text-sm leading-relaxed text-text-secondary">{volunteershipIntro}</p>

            <div className="ml-6 flex flex-col gap-4 border-l border-border pl-6 md:ml-8 md:pl-8">
              {gdgEvents.map((event) => (
                <Card key={event.title} className="flex flex-col gap-3 p-5 md:p-6">
                  <span className="font-mono text-xs uppercase tracking-wide text-accent">{event.date}</span>
                  <h3 className="font-display text-base font-semibold text-text-primary">{event.title}</h3>
                  <p className="font-mono text-xs text-text-secondary">{event.context}</p>
                  <BulletList items={event.bullets} />
                  <div className="flex flex-wrap gap-3">
                    {event.videos.map((video, i) => (
                      <DriveEmbed
                        key={video}
                        src={video}
                        title={`${event.title} video ${i + 1}`}
                        height={220}
                        className="w-full sm:w-64"
                      />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {otherVolunteering.map((entry) => {
            const { name, role } = splitOrgTitle(entry.title);
            return (
              <div key={entry.title} className="flex flex-col gap-4">
                <VolunteerOrgHeader title={name} dateRange={entry.dateRange} summary={role} />
                <p className="text-sm leading-relaxed text-text-secondary">{entry.description}</p>
              </div>
            );
          })}

          <Card className="flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold text-text-primary">Skills Gained by Volunteering</h3>
            <div className="flex flex-wrap gap-2">
              {volunteeringSkills.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        </>
      )}

      {activeTab === "presentations" && (
        <>
          <Card className="flex flex-col gap-2">
            <h3 className="font-display text-lg font-semibold text-text-primary">{presentationsIntro.heading}</h3>
            <p className="text-sm leading-relaxed text-text-secondary">{presentationsIntro.body}</p>
          </Card>
          {presentations.map((entry) => (
            <Card key={entry.title} className="flex flex-col gap-3">
              <h3 className="font-display text-lg font-semibold text-text-primary">{entry.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{entry.description}</p>
              <div className="flex flex-wrap gap-3">
                {entry.photos.map((photo, i) => (
                  <DriveEmbed key={photo} src={photo} title={`${entry.title} photo ${i + 1}`} height={140} className="w-40" />
                ))}
              </div>
            </Card>
          ))}
        </>
      )}

      {activeTab === "journey" && (
        <>
          <Card className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-text-primary">Journey Map</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{journeyIntro}</p>
            </div>
            <Timeline
              items={journeyPhases.map((phase) => ({
                title: phase.phase,
                subtitle: phase.institution,
                description: phase.focus,
                dateRange: `${phase.start} – ${phase.end}`,
              }))}
            />
          </Card>

          <Card className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-lg font-semibold text-text-primary">Personal Journey Narrative</h3>
              <p className="font-mono text-xs text-text-secondary">From Curiosity to Community Leadership in AI</p>
            </div>
            <ProseBlocks blocks={journeyNarrative} />
          </Card>
        </>
      )}
    </PageShell>
  );
}
