interface TimelineItem {
  title: string;
  content: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12 md:pl-16">
            <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <h3 className="font-serif font-bold text-text-primary text-lg">
              {item.title}
            </h3>
            <p className="mt-1 text-text-secondary">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
