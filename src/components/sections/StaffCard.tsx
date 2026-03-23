import type { Staff } from "@/types";
import Card from "@/components/ui/Card";

interface StaffCardProps {
  staff: Staff;
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <Card className="p-6 h-full">
      {/* Photo placeholder */}
      <div className="w-24 h-24 rounded-full bg-secondary/50 mx-auto flex items-center justify-center mb-4">
        <svg className="w-10 h-10 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div className="text-center">
        <h3 className="font-serif font-bold text-text-primary text-lg">{staff.name}</h3>
        <p className="text-sm text-primary font-medium mt-1">{staff.role}</p>
        <p className="text-xs text-text-secondary mt-0.5">経験{staff.experience}</p>
      </div>
      {staff.qualifications && staff.qualifications.length > 0 && (
        <div className="mt-3 flex flex-wrap justify-center gap-1">
          {staff.qualifications.map((q) => (
            <span
              key={q}
              className="inline-block px-2 py-0.5 text-xs bg-secondary/40 text-text-secondary rounded"
            >
              {q}
            </span>
          ))}
        </div>
      )}
      <p className="mt-4 text-sm text-text-secondary leading-relaxed">
        {staff.message}
      </p>
    </Card>
  );
}
