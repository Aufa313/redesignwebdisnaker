"use client";

import { useMemo, useState } from "react";
import SafeImage from "@/components/SafeImage";
import { jobListings } from "@/lib/site-data";

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredJobs = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return jobListings;
    }

    return jobListings.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword),
    );
  }, [search]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Lowongan kerja
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Peluang kerja terbaru di Sleman
        </h1>
      </div>

      <div className="mb-8 flex gap-3 rounded-[1.75rem] border border-emerald-400/80 bg-white p-3 shadow-sm md:items-center">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Cari lowongan kerja"
          placeholder="Cari posisi atau perusahaan..."
          className="h-14 w-full rounded-full border border-emerald-400 bg-white px-5 text-base text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
        />
      </div>

      {filteredJobs.length === 0 ? (
        <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
          Lowongan yang Anda cari belum tersedia. Coba kata kunci lain.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map((job) => (
            <article key={job.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <SafeImage src={job.image} alt={job.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="mb-3 inline-flex rounded-full bg-sky-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700">
                  Lowongan
                </div>
                <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
                <p className="mt-3 text-sm text-slate-600">{job.company}</p>
                <p className="mt-2 text-sm text-slate-500">{job.date}</p>
                <a href={job.href} className="mt-5 inline-flex text-sm font-semibold text-emerald-700">
                  Lihat detail →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
