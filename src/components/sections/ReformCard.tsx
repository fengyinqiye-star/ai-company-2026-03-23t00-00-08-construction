import type { ReformService } from "@/types";
import Card from "@/components/ui/Card";

interface ReformCardProps {
  service: ReformService;
}

export default function ReformCard({ service }: ReformCardProps) {
  return (
    <Card className="p-6 h-full">
      {/* Image placeholder */}
      <div className="aspect-[3/2] bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
        <div className="text-center text-text-secondary/50">
          <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-xs">{service.name}</p>
        </div>
      </div>
      <h3 className="font-serif font-bold text-text-primary text-lg">{service.name}</h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {service.description}
      </p>
      <div className="mt-4 pt-4 border-t border-border/30 flex justify-between text-sm">
        <div>
          <span className="text-text-secondary">工期: </span>
          <span className="text-text-primary font-medium">{service.estimatedDuration}</span>
        </div>
        <div>
          <span className="text-text-secondary">目安: </span>
          <span className="text-primary font-medium">{service.priceRange}</span>
        </div>
      </div>
    </Card>
  );
}
