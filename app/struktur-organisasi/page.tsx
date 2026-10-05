import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Struktur Organisasi",
  description: "Struktur organisasi Dinas Ketenagakerjaan Kabupaten Sleman dan unit-unit pelayanannya.",
};

const positions = [
  { title: "Kepala Dinas", description: "Memimpin dan mengkoordinasikan seluruh program dan kebijakan ketenagakerjaan." },
  { title: "Sekretariat", description: "Menangani administrasi, perencanaan, keuangan, dan koordinasi internal." },
  { title: "Bidang Penempatan dan Perluasan Kerja", description: "Mengelola penempatan tenaga kerja, informasi lapangan kerja, dan jaringan kerja sama." },
  { title: "Bidang Pelatihan dan Produktivitas", description: "Menyusun dan melaksanakan program pelatihan, kompetensi, dan penguatan SDM." },
  { title: "Bidang Ketenagakerjaan dan Hubungan Industrial", description: "Memfasilitasi hubungan industrial, perlindungan, dan pemantauan ketenagakerjaan." },
  { title: "Unit Pelayanan Teknis", description: "Mendukung operasional layanan masyarakat dan pengelolaan data ketenagakerjaan." },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Struktur
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Organisasi Dinas Ketenagakerjaan Sleman
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {positions.map((position) => (
          <article
            key={position.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700">
              Unit
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{position.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{position.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
