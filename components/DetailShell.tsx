import SafeImage from "@/components/SafeImage";

type DetailShellProps = {
  badge: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function DetailShell({
  badge,
  title,
  date,
  image,
  summary,
  sections,
  ctaLabel,
  ctaHref,
}: DetailShellProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <header className="border-b border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
          <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            {badge}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {date}
          </p>
        </header>

        <div className="p-6 sm:p-8 lg:p-10">
          <SafeImage src={image} alt={title} className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[420px]" />

          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-lg leading-8 text-slate-700">{summary}</p>

            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {ctaLabel && ctaHref ? (
              <div className="mt-10">
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-600/25 transition hover:bg-emerald-700"
                >
                  {ctaLabel}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
