const services = [
  {
    tag: "AK-1",
    title: "Akses Kerja",
    description:
      "Informasi lowongan, registrasi tenaga kerja, serta pendampingan pencari kerja secara digital dan cepat.",
    accent: "from-emerald-500 to-green-600",
    icon: "⚡",
    href: "/layanan/akses-kerja",
  },
  {
    tag: "BLK",
    title: "Balai Latihan Kerja",
    description:
      "Program pelatihan, sertifikasi, dan peningkatan kompetensi agar siap bersaing di dunia kerja.",
    accent: "from-sky-500 to-cyan-600",
    icon: "🎓",
    href: "/layanan/balai-latihan-kerja",
  },
  {
    tag: "Job Fair",
    title: "Job Fair & Rekrutmen",
    description:
      "Temu kerja yang mempertemukan pelamar dan perusahaan mitra dalam satu agenda terstruktur.",
    accent: "from-violet-500 to-indigo-600",
    icon: "🤝",
    href: "/lowongan/security-mirota-pasaraya",
  },
];

export default function QuickServices() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Layanan cepat
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pilihan layanan yang paling dibutuhkan
          </h2>
        </div>
        <a href="/layanan" className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800">
          Lihat semua layanan →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.tag}
            className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]"
          >
            <div className={`absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-gradient-to-br ${service.accent} opacity-10 transition group-hover:scale-125`} />
            <div className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${service.accent} text-lg font-black text-white shadow-lg`}>
              <span aria-hidden="true">{service.tag.slice(0, 1)}</span>
            </div>
            <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
              {service.tag}
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            <a
              href={service.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800"
            >
              Selengkapnya
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
