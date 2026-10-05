import type { Metadata } from "next";
import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";
import SafeImage from "@/components/SafeImage";
import { jobListings, newsPosts, performanceStats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Portal layanan ketenagakerjaan, lowongan kerja, pelatihan, dan informasi publik untuk masyarakat Kabupaten Sleman.",
};

const news = newsPosts;
const jobs = jobListings.slice(0, 4);

export default function Home() {
  return (
    <>
      <Hero />
      <QuickServices />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/60 to-sky-50 py-24">
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Layanan publik
            </span>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Satu portal untuk kebutuhan kerja Anda
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Akses informasi penting dan layanan publik secara lebih mudah, ringkas, dan transparan.
            </p>
          </div>

          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "SIAPkerja", desc: "Sistem informasi layanan ketenagakerjaan untuk kemudahan akses digital." },
              { title: "WhatsApp Group", desc: "Wadah informasi lowongan kerja dan update terbaru bagi pencari kerja." },
              { title: "SIMETAKERJA", desc: "Platform kerja yang memudahkan proses administrasi dan informasi layanan." },
              { title: "Lapor Aduan", desc: "Saluran pengaduan dan layanan informasi publik yang responsif." },
            ].map((item) => (
              <div key={item.title} className="group rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
                  {item.title.slice(0, 2).toUpperCase()}
                </div>
                  <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600">↗</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Dukungan untuk Anda
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Mendukung langkah Anda menuju dunia kerja
            </h2>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <SafeImage
                src="https://disnaker.slemankab.go.id/wp-content/uploads/2023/01/Ilustrasi-pelatihan-kerja.jpg"
                alt="Pelatihan kerja dan layanan publik"
                className="h-full min-h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Fokus kami</p>
                <p className="mt-2 text-2xl font-bold">Kompetensi yang relevan.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Akses cepat", "Informasi dan layanan dapat diakses dengan proses yang sederhana dan jelas."],
                ["Pelatihan relevan", "Program disusun berdasarkan kebutuhan industri dan pasar kerja saat ini."],
                ["Dukungan tenaga kerja", "Bantuan untuk pencari kerja, perusahaan, dan masyarakat yang membutuhkan layanan."],
                ["Komitmen pelayanan", "Kami hadir untuk menjalankan layanan publik yang responsif, akuntabel, dan mudah dijangkau."],
              ].map(([title, description]) => (
                <div key={title} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-6 transition hover:-translate-y-1 hover:bg-white/[0.14] hover:shadow-lg">
                  <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                    Disnaker
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                  <div className="mt-5 h-1 w-8 rounded-full bg-emerald-400 transition-all group-hover:w-14" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="berita" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Informasi terbaru
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Berita dan pengumuman penting
              </h2>
            </div>
            <a href="/berita" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              Lihat semua berita →
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <a href={news[0].href} className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]">
              <div className="overflow-hidden">
                <SafeImage src={news[0].image} alt={news[0].title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                  {news[0].category}
                </div>
                <h3 className="text-2xl font-bold leading-tight text-slate-900 sm:text-[2rem]">
                  {news[0].title}
                </h3>
                <p className="mt-4 text-sm text-slate-500">{news[0].date}</p>
              </div>
            </a>

            <div className="space-y-5">
              {news.slice(1).map((item) => (
                <a key={item.title} href={item.href} className="group flex gap-4 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-md">
                  <SafeImage src={item.image} alt={item.title} className="h-28 w-28 rounded-2xl object-cover" />
                  <div className="flex-1 py-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                      {item.category}
                    </div>
                    <h4 className="mt-2 text-base font-bold leading-6 text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500">{item.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="jobfair" className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Lowongan terbaru
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Peluang kerja yang sedang dibuka
              </h2>
            </div>
            <a href="/lowongan" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              Lihat semua lowongan →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {jobs.map((job) => (
              <article key={job.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]">
                <div className="overflow-hidden">
                  <SafeImage src={job.image} alt={job.title} className="h-36 w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="mb-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700">
                    Lowongan
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{job.company}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      {job.date}
                    </span>
                    <a
                      href={job.href}
                      className="rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Daftar
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-xl">
            <SafeImage
              src="https://disnaker.slemankab.go.id/wp-content/uploads/2023/01/Ilustrasi-pelatihan-kerja.jpg"
              alt="Pelatihan kerja"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Program unggulan
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Siap membantu masyarakat menghadapi tantangan kerja masa depan.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Dari pelatihan vokasi, rekrutmen, hingga pendampingan pencari kerja, kami hadir untuk menjembatani kebutuhan dunia kerja dengan kompetensi yang relevan dan layanan yang terarah.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {performanceStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
