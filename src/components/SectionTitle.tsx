type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      {subtitle && (
        <span className="text-sm uppercase tracking-widest text-amber-500 block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
}
