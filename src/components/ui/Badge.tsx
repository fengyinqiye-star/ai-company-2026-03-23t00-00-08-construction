import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "new-build" | "reform" | "default";
  className?: string;
}

const variantStyles = {
  "new-build": "bg-accent/10 text-accent border-accent/30",
  reform: "bg-cta/10 text-cta border-cta/30",
  default: "bg-secondary/50 text-text-secondary border-border",
};

export default function Badge({
  label,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full border",
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
