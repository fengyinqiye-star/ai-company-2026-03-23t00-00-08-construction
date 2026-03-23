import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-surface shadow-sm border border-border/30 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
