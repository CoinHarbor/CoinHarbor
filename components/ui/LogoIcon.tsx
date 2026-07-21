interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({
  className = "",
}: LogoIconProps) {
  return (
    <div
      className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-lg shadow-emerald-500/30 ${className}`}
    >
      <span className="text-lg font-black text-white">
        C
      </span>

      <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
    </div>
  );
}