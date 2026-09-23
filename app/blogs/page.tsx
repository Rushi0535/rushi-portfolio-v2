"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { TabBar, type Tab } from "@/components/tab-bar";
import { Card } from "@/components/card";
import { ExternalLink } from "@/components/external-link";
import { DriveEmbed } from "@/components/drive-embed";
import { DocumentIcon } from "@/lib/icons";
import { blogsIntro, blogsFollowNote, blogPosts, newspaperArticle } from "@/lib/content/blogs";

const tabs: Tab[] = [
  { id: "medium-blogs", label: "Medium Blogs" },
  { id: "newspaper-article", label: "Newspaper Article" },
];

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <PageShell
      icon={DocumentIcon}
      title="Blogs & Articles"
      subtitle="Writing on AI/ML, research notes, and engineering deep-dives."
      tabs={<TabBar tabs={tabs} activeId={activeTab} onChange={setActiveTab} />}
    >
      {activeTab === "medium-blogs" && (
        <>
          <Card className="flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-text-secondary">{blogsIntro}</p>
            <p className="font-mono text-xs text-accent">{blogsFollowNote}</p>
          </Card>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.title} className="flex flex-col gap-3">
                <DriveEmbed src={post.imageUrl} title={`${post.title} — thumbnail`} height={160} />
                <h3 className="font-display text-base font-semibold text-text-primary">{post.title}</h3>
                <p className="line-clamp-4 text-sm leading-relaxed text-text-secondary">{post.description}</p>
                <ExternalLink href={post.url} className="font-mono text-xs">
                  Read on Medium →
                </ExternalLink>
              </Card>
            ))}
          </div>
        </>
      )}

      {activeTab === "newspaper-article" && (
        <Card className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-lg font-semibold text-text-primary">{newspaperArticle.title}</h3>
            <p className="font-mono text-xs text-text-secondary">
              {newspaperArticle.publication} · {newspaperArticle.date}
            </p>
          </div>

          <DriveEmbed src={newspaperArticle.imageUrl} title="AI in Education — newspaper clipping" height={420} />

          <p className="text-sm leading-relaxed text-text-secondary">{newspaperArticle.intro}</p>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wide text-text-secondary">Key Points</span>
            <ol className="flex flex-col gap-2 pl-5 text-sm leading-relaxed text-text-secondary">
              {newspaperArticle.keyPoints.map((point, i) => (
                <li key={i} className="list-decimal">
                  {point}
                </li>
              ))}
            </ol>
          </div>

          <p className="text-sm leading-relaxed text-text-secondary">{newspaperArticle.toolsNote}</p>
          <p className="text-sm leading-relaxed text-text-secondary">{newspaperArticle.conclusion}</p>
        </Card>
      )}
    </PageShell>
  );
}
