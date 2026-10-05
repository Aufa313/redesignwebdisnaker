import SafeImage from "@/components/SafeImage";

const logoUrl = "/asset/logo.png";

const visitorStats = [
  {
    label: "Pengunjung Hari Ini",
    value: "4",
    color: "from-blue-500 to-indigo-500",
    mark: "↗",
  },
  {
    label: "Views Hari Ini",
    value: "12",
    color: "from-emerald-500 to-green-500",
    mark: "▤",
  },
  {
    label: "Pengunjung 7 Hari",
    value: "372",
    color: "from-amber-400 to-orange-500",
    mark: "♧",
  },
  {
    label: "Total Pengunjung",
    value: "6,097",
    color: "from-violet-500 to-purple-500",
    mark: "▥",
  },
  {
    label: "Total Views",
    value: "29,165",
    color: "from-indigo-500 to-blue-500",
    mark: "◉",
  },
  {
    label: "Terakhir Diperbarui",
    value: "8 Sep 2026",
    color: "from-teal-400 to-cyan-500",
    mark: "◷",
  },
];

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-white/10 bg-slate-950 text-slate-200"
    >
      <section className="bg-[#0b1428] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 rounded-[1.5rem] border border-white/10 bg-[#19263b] px-5 py-7 shadow-[0_24px_70px_rgba(2,8,23,0.3)] sm:grid-cols-3 lg:grid-cols-6 lg:gap-3 lg:px-6">
          {visitorStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} text-2xl font-bold text-white shadow-lg`}
              >
                {stat.mark}
              </div>
              <p className="text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="mt-1 text-2xl font-black tracking-tight text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="relative overflow-hidden bg-[#071d3a] py-6 sm:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.3),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(14,165,233,0.28),transparent_35%)]" />
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[38px] border-cyan-300/10" />
        <div className="pointer-events-none absolute -bottom-36 left-1/3 h-72 w-72 rounded-full border-[22px] border-emerald-300/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] px-6 py-7 shadow-[0_25px_70px_rgba(2,8,23,0.3)] backdrop-blur-sm sm:px-10 sm:py-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="pointer-events-none absolute -right-8 -top-16 h-44 w-44 rotate-12 rounded-[2.5rem] bg-emerald-300/10" />
            <div className="relative max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 -rotate-6 items-center justify-center rounded-2xl bg-emerald-300 text-xl text-slate-950 shadow-lg shadow-emerald-950/20">
                  ?
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">
                  Butuh bantuan?
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl">
                Temukan layanan yang tepat untuk langkah Anda.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Konsultasikan kebutuhan ketenagakerjaan Anda bersama tim
                Disnaker Sleman.
              </p>
            </div>

            <div className="relative mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
              <a
                href="/kontak"
                className="group inline-flex items-center justify-between gap-8 rounded-2xl bg-emerald-300 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-emerald-200"
              >
                Kontak kami
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
              <a
                href="/layanan"
                className="group inline-flex items-center justify-between gap-8 rounded-2xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
              >
                Lihat layanan
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-[#123f73]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 22px 72px at 50% 50%, transparent 48%, rgba(191,219,254,0.9) 50%, transparent 55%), radial-gradient(ellipse 72px 22px at 50% 50%, transparent 48%, rgba(191,219,254,0.9) 50%, transparent 55%), radial-gradient(ellipse 22px 72px at 0% 0%, transparent 48%, rgba(191,219,254,0.9) 50%, transparent 55%), radial-gradient(ellipse 72px 22px at 0% 0%, transparent 48%, rgba(191,219,254,0.9) 50%, transparent 55%)",
            backgroundSize: "110px 110px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <SafeImage
                src={logoUrl}
                alt="Logo Disnaker Sleman"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
              Menyediakan layanan ketenagakerjaan yang cepat, profesional, dan
              berbasis kebutuhan masyarakat serta dunia usaha di Kabupaten Sleman.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Navigasi
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>
              <a href="/" className="transition hover:text-white">
                Beranda
              </a>
            </li>
            <li>
              <a href="/profil-dinas" className="transition hover:text-white">
                Profil Dinas
              </a>
            </li>
            <li>
              <a
                href="/struktur-organisasi"
                className="transition hover:text-white"
              >
                Struktur Organisasi
              </a>
            </li>
            <li>
              <a href="/layanan" className="transition hover:text-white">
                Layanan
              </a>
            </li>
            <li>
              <a href="/berita" className="transition hover:text-white">
                Berita
              </a>
            </li>
            <li>
              <a href="/lowongan" className="transition hover:text-white">
                Lowongan
              </a>
            </li>
          </ul>
        </div>

        <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Kontak
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Alamat
              </span>
              <span className="mt-1 block leading-5">
                Jl. Parasamya, Beran, Tridadi, Sleman, DI Yogyakarta 55511
              </span>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Telepon
              </span>
              <a href="tel:+62274868429" className="mt-1 block transition hover:text-white">
                (0274) 868429
              </a>
              <a href="tel:+62274868803" className="block transition hover:text-white">
                (0274) 868803
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Email
              </span>
              <a href="mailto:disnaker@slemankab.go.id" className="mt-1 block transition hover:text-white">
                disnaker@slemankab.go.id
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Jam layanan
              </span>
              <span className="mt-1 block leading-5">
                Senin - Jumat, 08.00 - 15.30 WIB
              </span>
            </li>
            <li className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=6285713276575&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                aria-label="Buka grup WhatsApp pencari kerja"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500 bg-emerald-500/10 text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2a9.8 9.8 0 0 0-8.49 14.7L2 22l5.47-1.44A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.08-1.12l-.29-.17-3.25.86.87-3.16-.19-.31A8 8 0 1 1 12 19.8Zm4.39-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/disnakersleman/"
                target="_blank"
                rel="noreferrer"
                aria-label="Buka Instagram Disnaker Sleman"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pink-500 bg-pink-500/10 text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/20 hover:text-pink-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
                  <circle cx="12" cy="12" r="4.1" />
                  <circle
                    cx="17.7"
                    cy="6.4"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </li>
            <li className="pt-2">
              <a
                href="/kontak"
                className="inline-flex rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Hubungi kami
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#071225] px-4 py-3 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        © 2026 Dinas Ketenagakerjaan Kabupaten Sleman. All rights reserved.
      </div>
    </footer>
  );
}
