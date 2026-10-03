import React from "react";
import { 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Zap, 
  FileCheck, 
  Leaf, 
  Users 
} from "lucide-react";

interface ValueCardProps {
  id: string;
  title: string;
  description: string;
  index: number;
}

const VALUE_ICONS: Record<string, React.ElementType> = {
  excellence: Award,
  integrity: HeartHandshake,
  safety: ShieldCheck,
  efficiency: Zap,
  compliance: FileCheck,
  sustainability: Leaf,
  "client-focus": Users,
};

export function ValueCard({ id, title, description, index }: ValueCardProps) {
  const IconComponent = VALUE_ICONS[id] || ShieldCheck;

  return (
    <div className="group relative flex flex-col justify-between p-7 sm:p-8 bg-white rounded-3xl border border-black/[0.06] hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.03] hover:-translate-y-0.5 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-2xl bg-black/[0.04] text-slate-850 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-black transition-colors">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors mb-2">
          {title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
