"use client";

import { cn } from "@/lib/utils";

interface Tab {
  label: string;
  value: string;
}

interface FilterTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (value: string) => void;
}

export default function FilterTabs({ tabs, activeTab, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={activeTab === tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px]",
            activeTab === tab.value
              ? "bg-primary text-white"
              : "bg-secondary/30 text-text-secondary hover:bg-secondary/60"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
