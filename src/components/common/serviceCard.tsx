import { cn } from "@/utils/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  className?: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  category,
  icon: Icon,
  className,
  index = 0,
  translations,
}: ServiceCardProps & { translations: any }) {
  return (
    <div
      className={cn(
        "service-card relative overflow-hidden rounded-2xl p-6 bg-white shadow-md hover:shadow-xl",
        "backdrop-blur-sm border border-slate-100",
        "flex flex-col items-start gap-4",
        className
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "backwards",
      }}>
      <div className="card-icon p-3 rounded-xl bg-blue-50 text-indigo-600">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="space-y-2">
        <span className="card-subtitle text-sm font-medium text-indigo-600">
          {category}
        </span>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="mt-4 w-full h-px bg-slate-100" />
      <div className="flex items-center text-sm text-slate-500 mt-2">
        <span className="transition-colors hover:text-indigo-600 cursor-pointer">
          {translations.viewmore}
        </span>
        <svg
          className="ml-1 w-4 h-4 transition-transform transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}
