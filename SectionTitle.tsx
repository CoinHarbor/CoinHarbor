interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[0.3em] text-emerald-400">
        {badge}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg text-slate-400">
        {description}
      </p>
    </div>
  );
}