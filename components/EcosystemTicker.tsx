import { Camera, Cpu, HardHat, Workflow } from "lucide-react";

const capabilities = [
  { label: "Alat berat & industri", icon: HardHat, color: "text-amber-300" },
  { label: "Software & teknologi", icon: Cpu, color: "text-cyan-300" },
  { label: "Multimedia & visual", icon: Camera, color: "text-violet-300" },
  { label: "Sinergi lintas pilar", icon: Workflow, color: "text-slate-300" },
];

export default function EcosystemTicker() {
  return (
    <div aria-label="Kapabilitas Syah Group" className="overflow-hidden border-y border-white/[0.07] bg-white/[0.02] py-4">
      <div className="ecosystem-marquee flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {capabilities.map(({ label, icon: Icon, color }) => (
              <span key={label} className="flex items-center gap-3 px-8 text-xs font-medium uppercase tracking-[.13em] text-slate-400 sm:px-12 sm:text-sm">
                <Icon size={16} className={color} /> {label} <span className="ml-8 h-1 w-1 rounded-full bg-white/20 sm:ml-12" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
