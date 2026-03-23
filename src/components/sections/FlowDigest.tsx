import { flowSteps } from "@/data/flow-steps";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function FlowDigest() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          title="家づくりの流れ"
          subtitle="資料請求から完成まで、丁寧にサポートいたします"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {flowSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center relative">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold font-serif">
                {step.step}
              </div>
              {index < flowSteps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-primary/20" />
              )}
              <h3 className="mt-3 font-medium text-sm text-text-primary">
                {step.title}
              </h3>
              <p className="mt-1 text-xs text-text-secondary">{step.duration}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/flow" variant="outline">
            詳しく見る
          </Button>
        </div>
      </div>
    </section>
  );
}
