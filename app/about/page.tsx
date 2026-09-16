"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { TabBar, type Tab } from "@/components/tab-bar";
import { Card } from "@/components/card";
import { UserIcon } from "@/lib/icons";

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <PageShell
      icon={UserIcon}
      title="About Me"
      subtitle="A quick introduction to who I am and what I work on."
      tabs={<TabBar tabs={tabs} activeId={activeTab} onChange={setActiveTab} />}
    >
      {activeTab === "overview" && (
        <Card>
          <p className="text-text-secondary">Overview content coming soon.</p>
        </Card>
      )}
      {activeTab === "education" && (
        <Card>
          <p className="text-text-secondary">Education timeline coming soon.</p>
        </Card>
      )}
      {activeTab === "experience" && (
        <Card>
          <p className="text-text-secondary">Experience timeline coming soon.</p>
        </Card>
      )}
      {activeTab === "skills" && (
        <Card>
          <p className="text-text-secondary">Skills breakdown coming soon.</p>
        </Card>
      )}
    </PageShell>
  );
}
