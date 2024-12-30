interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
