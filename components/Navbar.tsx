"use client";

import Link from "next/link";
import { useState } from "react";
import SafeImage from "@/components/SafeImage";

const profileItems = [
  { label: "Tentang", href: "/profil-dinas#tentang" },
  { label: "Sejarah", href: "/profil-dinas#sejarah" },
  { label: "Visi dan Misi", href: "/profil-dinas#visi-misi" },
  { label: "Kedudukan", href: "/profil-dinas#kedudukan" },
  { label: "Tugas dan Fungsi", href: "/profil-dinas#tugas-fungsi" },
  { label: "Maklumat Pelayanan", href: "/profil-dinas#maklumat-pelayanan" },
  { label: "Struktur Organisasi", href: "/struktur-organisasi" },
  { label: "Profil Dinas", href: "/profil-dinas" },
  {
    label: "Profil Pejabat Struktural dan LHKPN",
    href: "/profil-dinas#pejabat-struktural",
  },
  { label: "Profil Pegawai", href: "/profil-dinas#profil-pegawai" },
  {
    label: 'Disnaker "BerAKHLAK" dan Budaya SATRIYA',
    href: "/profil-dinas#berakhlak-satriya",
  },
  { label: "Penghargaan", href: "/profil-dinas#penghargaan" },
  { label: "Indeks Kepuasan Masyarakat", href: "/profil-dinas#ikm" },
];

const jobItems = [
  { label: "Lowongan Kerja Lokal", href: "/lowongan#lokal" },
  { label: "Lowongan Kerja Luar Daerah", href: "/lowongan#luar-daerah" },
  { label: "Lowongan Kerja Luar Negeri", href: "/lowongan#luar-negeri" },
  { label: "Informasi BLK", href: "/layanan#blk" },
];

const permitItems = [
  {
    label: "Izin Lembaga Pelatihan Kerja Swasta (LPK)",
    href: "/layanan#izin-lpk",
  },
  { label: "Syarat-syarat Transmigrasi", href: "/layanan#transmigrasi" },
  {
    label: "Syarat Pembuatan Kartu Kuning (AK I)",
    href: "/layanan#kartu-kuning",
  },
  {
    label: "Penerbitan Tanda Daftar Bursa Kerja Khusus (BKK)",
    href: "/layanan#bkk",
  },
  {
    label: "Persyaratan Pengajuan Penguatan Modal CPMI",
    href: "/layanan#cpmi",
  },
];

const informationItems = [
  { label: "Berkala", href: "/berita#berkala" },
  { label: "Setiap Saat", href: "/berita#setiap-saat" },
  { label: "Serta Merta", href: "/berita#serta-merta" },
  { label: "Download", href: "/berita#download" },
  { label: "Informasi Lembaga Pelatihan Kerja (LPK)", href: "/layanan#lpk" },
  { label: "Program dan Kegiatan", href: "/berita#program-kegiatan" },
  { label: "Informasi Publik", href: "/berita#informasi-publik" },
  { label: "SOP Dinas Tenaga Kerja", href: "/layanan#sop" },
];

const ppidItems = [
  { label: "Formulir Permohonan Informasi", href: "/kontak#formulir-ppid" },
  { label: "Portal E-PPID", href: "/kontak#e-ppid" },
];

const simpleNavItems = [
  { label: "Berita", href: "/berita" },
  { label: "Hubungi Kami", href: "/kontak" },
  { label: "Agenda", href: "/berita#agenda" },
];

const whistleblowerUrl =
  "https://inspektorat.slemankab.go.id/whistleblowersystem/";

const logoUrl = "/asset/logo.png";

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m5 7 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-gradient-to-r from-white/95 via-emerald-50/80 to-cyan-50/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Beranda Disnaker Sleman"
        >
          <SafeImage
            src={logoUrl}
            alt="Logo Disnaker Sleman"
            className="h-11 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-4 text-[13px] font-medium text-slate-700 lg:flex">
          <Link href="/" className="transition-colors hover:text-teal-700">
            Beranda
          </Link>

          <div className="group relative">
            <button
              type="button"
              aria-expanded={openDesktopMenu === "Profil"}
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "Profil" ? null : "Profil",
                )
              }
              className="inline-flex items-center gap-1.5 py-3 transition-colors hover:text-teal-700"
            >
              Profil <Chevron />
            </button>
            <div className={`absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 rounded-2xl border border-emerald-100 bg-white/95 p-2 shadow-xl shadow-emerald-900/10 transition-all ${openDesktopMenu === "Profil" ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"} group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
              {profileItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/berita"
            className="transition-colors hover:text-teal-700"
          >
            Berita
          </Link>

          <div className="group relative">
            <button
              type="button"
              aria-expanded={openDesktopMenu === "Lowongan Kerja"}
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "Lowongan Kerja" ? null : "Lowongan Kerja",
                )
              }
              className="inline-flex items-center gap-1.5 py-3 transition-colors hover:text-teal-700"
            >
              Lowongan Kerja <Chevron />
            </button>
            <div className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 rounded-2xl border border-emerald-100 bg-white/95 p-2 shadow-xl shadow-emerald-900/10 transition-all ${openDesktopMenu === "Lowongan Kerja" ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"} group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
              {jobItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              aria-expanded={openDesktopMenu === "Info Perizinan"}
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "Info Perizinan" ? null : "Info Perizinan",
                )
              }
              className="inline-flex items-center gap-1.5 py-3 transition-colors hover:text-teal-700"
            >
              Info Perizinan <Chevron />
            </button>
            <div className={`absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 rounded-2xl border border-emerald-100 bg-white/95 p-2 shadow-xl shadow-emerald-900/10 transition-all ${openDesktopMenu === "Info Perizinan" ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"} group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
              {permitItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/kontak"
            className="transition-colors hover:text-teal-700"
          >
            Hubungi Kami
          </Link>

          <Link
            href="/berita#agenda"
            className="transition-colors hover:text-teal-700"
          >
            Agenda
          </Link>

          <div className="group relative">
            <button
              type="button"
              aria-expanded={openDesktopMenu === "Informasi"}
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "Informasi" ? null : "Informasi",
                )
              }
              className="inline-flex items-center gap-1.5 py-3 transition-colors hover:text-teal-700"
            >
              Informasi <Chevron />
            </button>
            <div className={`absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 rounded-2xl border border-emerald-100 bg-white/95 p-2 shadow-xl shadow-emerald-900/10 transition-all ${openDesktopMenu === "Informasi" ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"} group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
              {informationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              aria-expanded={openDesktopMenu === "PPID"}
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "PPID" ? null : "PPID",
                )
              }
              className="inline-flex items-center gap-1.5 py-3 transition-colors hover:text-teal-700"
            >
              PPID <Chevron />
            </button>
            <div className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 rounded-2xl border border-emerald-100 bg-white/95 p-2 shadow-xl shadow-emerald-900/10 transition-all ${openDesktopMenu === "PPID" ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0"} group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
              {ppidItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <a
            href={whistleblowerUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-teal-700"
          >
            Whistleblower System
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white/70 p-2 text-emerald-700 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {isMenuOpen ? (
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-emerald-100 bg-gradient-to-b from-white to-emerald-50/60 lg:hidden">
          <div className="mx-auto flex max-h-[calc(100vh-5rem)] max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-teal-700"
            >
              Beranda
            </Link>

            {[
              { label: "Profil", items: profileItems },
              { label: "Lowongan Kerja", items: jobItems },
              { label: "Info Perizinan", items: permitItems },
              { label: "Informasi", items: informationItems },
              { label: "PPID", items: ppidItems },
            ].map((menu) => {
              const isOpen = openMobileMenu === menu.label;
              return (
                <div key={menu.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileMenu(isOpen ? null : menu.label)
                    }
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-teal-700"
                  >
                    {menu.label}
                    <span
                      className={
                        isOpen
                          ? "rotate-180 transition-transform"
                          : "transition-transform"
                      }
                    >
                      <Chevron />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="ml-3 border-l border-emerald-100 pl-3">
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-teal-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {simpleNavItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-teal-700"
              >
                {item.label}
              </Link>
            ))}
            {simpleNavItems.slice(2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-teal-700"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whistleblowerUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-teal-700"
            >
              Whistleblower System
            </a>
            <Link
              href="/layanan"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:from-emerald-700 hover:to-teal-700"
            >
              Ajukan Layanan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
