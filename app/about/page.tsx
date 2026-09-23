"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { TabBar, type Tab } from "@/components/tab-bar";
import { Card } from "@/components/card";
import { Tag } from "@/components/tag";
import { ExternalLink } from "@/components/external-link";
import { Placeholder } from "@/components/placeholder";
import { BulletList } from "@/components/bullet-list";
import { ProseBlocks } from "@/components/prose-blocks";
import { Timeline } from "@/components/timeline";
import { UserIcon } from "@/lib/icons";
import {
  profileTagline,
  profileLines,
  educationEntries,
  educationCoursework,
  educationAchievements,
  teachingAssistant,
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
            {/* TODO: embed real headshot photo — original site had one in the About Me header */}
            <div
              title="Photo coming soon"
              className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed border-border bg-bg text-center font-mono text-xs text-text-secondary sm:h-32 sm:w-32"
            >
              Photo — coming soon
            </div>
            <div className="flex flex-col gap-3">
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

          <Card className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wide text-accent">{teachingAssistant.dateRange}</span>
            <h3 className="font-display text-lg font-semibold text-text-primary">{teachingAssistant.role}</h3>
            <p className="font-mono text-xs text-text-secondary">{teachingAssistant.location}</p>
            <BulletList items={teachingAssistant.bullets} />
          </Card>

          {/* TODO: embed link — original site had a Testimonial Video embed here */}
          <Placeholder label="Testimonial video — coming soon" />
          {/* TODO: embed link — original site had individual document-link buttons here */}
          <Placeholder label="Supporting documents — coming soon" compact />
        </>
      )}

      {activeTab === "professional-experience" && (
        <>
          {professionalExperience.map((entry) => (
            <Card key={entry.role} className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-accent">{entry.dateRange}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{entry.role}</h3>
              <p className="font-mono text-xs text-text-secondary">
                {entry.organization} · {entry.location}
              </p>
              <BulletList items={entry.bullets} />
              {entry.documentLabel && (
                <>
                  {/* TODO: embed link — original site had a document-link button here */}
                  <Placeholder label={`${entry.documentLabel} — coming soon`} compact className="w-fit" />
                </>
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
          <Card className="flex flex-col gap-2">
            <h3 className="font-display text-lg font-semibold text-text-primary">
              Google Developer Group (GDG) NYC Volunteer (2025 – Present)
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">{volunteershipIntro}</p>
          </Card>

          {gdgEvents.map((event) => (
            <Card key={event.title} className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-accent">{event.date}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{event.title}</h3>
              <p className="font-mono text-xs text-text-secondary">{event.context}</p>
              <BulletList items={event.bullets} />
            </Card>
          ))}

          {otherVolunteering.map((entry) => (
            <Card key={entry.title} className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wide text-accent">{entry.dateRange}</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">{entry.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{entry.description}</p>
            </Card>
          ))}

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
            <Card key={entry.title} className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-text-primary">{entry.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{entry.description}</p>
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
