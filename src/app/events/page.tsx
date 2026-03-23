import type { Metadata } from "next";
import { pageMeta } from "@/data/metadata";
import { events } from "@/data/events";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: pageMeta.events.title,
  description: pageMeta.events.description,
};

export default function EventsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "見学会・イベント情報" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="見学会・イベント情報"
            subtitle="実際の住まいをご覧いただける見学会やイベントのご案内です"
          />

          {events.length === 0 ? (
            <div className="text-center py-12 text-text-secondary">
              <p className="text-lg">現在予定されているイベントはありません。</p>
              <p className="mt-2 text-sm">
                新しいイベント情報が公開されましたら、こちらでご案内いたします。
              </p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-surface border border-border/50 rounded-lg p-6"
                >
                  <h3 className="text-heading-3 font-serif font-bold text-text-primary">
                    {event.title}
                  </h3>
                  <div className="mt-2 text-sm text-text-secondary space-y-1">
                    <p>日時: {event.date} {event.time}</p>
                    <p>場所: {event.location}</p>
                  </div>
                  <p className="mt-3 text-text-secondary">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
