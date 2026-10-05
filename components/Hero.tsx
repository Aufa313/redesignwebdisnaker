const stats = [
  { value: "3.4K+", label: "Perusahaan" },
  { value: "12.8K+", label: "Pencari kerja" },
  { value: "96%", label: "Kepuasan" },
];

const quickHighlights = [
  { label: "AK-1", value: "Akses Kerja" },
  { label: "BLK", value: "Pelatihan Vokasi" },
  { label: "Job Fair", value: "Rekrutmen" },
];

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950 text-white"
      style={{
        backgroundImage: "url('/asset/images.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-0 bg-slate-950/55" />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950/95 via-slate-950/65 to-emerald-950/35" />
      <div className="absolute inset-0 z-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute -right-32 -top-32 z-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-100 backdrop-blur-sm">
            Dinas Tenaga Kerja Sleman
          </span>

          <h1 className="max-w-2xl text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.98]">
            Buka jalan menuju{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              masa depan kerja.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200/90">
            Dinas Ketenagakerjaan Kabupaten Sleman hadir untuk memudahkan akses
            informasi, pelatihan, penempatan kerja, dan layanan pemberdayaan
            tenaga kerja dengan pendekatan yang cepat, modern, dan mudah
            dijangkau.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/layanan"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-300"
            >
              Jelajahi layanan <span className="ml-2 text-lg">↗</span>
            </a>
            <a
              href="/lowongan"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Lihat lowongan kerja
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-5">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 first:pl-0">
                <div className="text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl rounded-[2rem] border border-white/20 bg-white/[0.08] p-6 shadow-[0_30px_100px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Semua yang Anda perlukan, dalam satu tempat.
                </h2>
              </div>
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-black text-slate-950 sm:flex">
                →
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {quickHighlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 transition hover:border-emerald-300/50 hover:bg-white/15"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-emerald-200">
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-base font-semibold text-white">
                      {item.value}
                    </span>
                  </div>
                  <span className="ml-auto text-xl text-white/50 transition group-hover:translate-x-1 group-hover:text-emerald-200">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-300">
              Akses informasi ketenagakerjaan, pelatihan, dan peluang kerja
              dalam satu portal resmi Disnaker Sleman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
