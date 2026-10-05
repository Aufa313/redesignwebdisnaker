import type { Metadata } from "next";
import { documentDownloads, serviceCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Layanan Publik",
  description: "Layanan publik Disnaker Sleman mencakup akses kerja, pelatihan, lowongan, dan informasi pengaduan masyarakat.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Layanan publik
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Semua layanan yang kami sediakan
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
          Disnaker Sleman menghadirkan layanan yang mudah diakses, cepat, dan relevan untuk kebutuhan pekerja, pelaku usaha, serta masyarakat secara umum.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {serviceCards.map((service) => (
          <article
            key={service.title}
            className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
          >
            <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
              {service.badge}
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            <a
              href={service.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800"
            >
              Selengkapnya <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Dokumen pendukung
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Unduhan dan acuan layanan
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {documentDownloads.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <span className="mt-3 inline-flex text-sm font-medium text-emerald-700">Unduh →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
