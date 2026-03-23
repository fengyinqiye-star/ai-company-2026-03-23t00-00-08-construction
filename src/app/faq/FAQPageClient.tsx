"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import FilterTabs from "@/components/ui/FilterTabs";
import Accordion from "@/components/ui/Accordion";

const categoryTabs = [
  { label: "すべて", value: "all" },
  { label: "家づくり全般", value: "general" },
  { label: "費用・資金", value: "cost" },
  { label: "リフォーム", value: "reform" },
  { label: "保証・アフター", value: "warranty" },
];

export default function FAQPageClient() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeTab);

  return (
    <>
      <div className="mb-10">
        <FilterTabs tabs={categoryTabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion
          items={filtered.map((item) => ({
            id: item.id,
            question: item.question,
            answer: item.answer,
          }))}
        />
      </div>
    </>
  );
}
