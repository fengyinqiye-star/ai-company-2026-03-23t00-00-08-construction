import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-heading-2 text-text-primary font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-body text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 bg-primary rounded-full",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
