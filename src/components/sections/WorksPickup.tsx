import { projects } from "@/data/works";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkCard from "./WorkCard";
import Button from "@/components/ui/Button";

export default function WorksPickup() {
  const pickup = projects.slice(0, 4);

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          title="施工事例"
          subtitle="小林建設が手がけた住まいをご紹介します"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pickup.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/works" variant="outline">
            施工事例をもっと見る
          </Button>
        </div>
      </div>
    </section>
  );
}
