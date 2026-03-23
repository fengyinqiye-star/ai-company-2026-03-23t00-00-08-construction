"use client";

import { useState } from "react";
import { projects } from "@/data/works";
import FilterTabs from "@/components/ui/FilterTabs";
import WorkCard from "@/components/sections/WorkCard";

const tabs = [
  { label: "すべて", value: "all" },
  { label: "新築", value: "new-build" },
  { label: "リフォーム", value: "reform" },
];

export default function WorksPageClient() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <>
      <div className="mb-10">
        <FilterTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
