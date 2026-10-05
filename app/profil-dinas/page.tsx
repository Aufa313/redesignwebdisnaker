import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Profil Dinas",
  description: "Profil Dinas Ketenagakerjaan Kabupaten Sleman, visi, misi, tugas, fungsi, dan layanan utama.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <header className="border-b border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
          <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            Profil
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Dinas Ketenagakerjaan Kabupaten Sleman
          </h1>
        </header>

        <div className="p-6 sm:p-8 lg:p-10">
          <SafeImage
            src="https://disnaker.slemankab.go.id/wp-content/uploads/2023/01/Ilustrasi-pelatihan-kerja.jpg"
            alt="Profil Dinas Ketenagakerjaan Sleman"
            className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
          />

          <div className="mx-auto mt-8 max-w-3xl space-y-8 text-slate-700">
            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Visi</h2>
              <p className="text-base leading-8">
                Mewujudkan masyarakat Sleman yang produktif, berdaya saing, dan sejahtera melalui tata kelola ketenagakerjaan yang profesional, inklusif, dan berorientasi pada kebutuhan pasar kerja.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Misi</h2>
              <ul className="list-disc space-y-3 pl-6 text-base leading-8">
                <li>Meningkatkan kualitas sumber daya manusia yang siap kerja dan berdaya saing.</li>
                <li>Menyediakan layanan ketenagakerjaan yang mudah diakses, cepat, dan responsif.</li>
                <li>Mengembangkan sistem informasi dan pelatihan kerja berbasis kebutuhan industri.</li>
                <li>Mendorong hubungan sinergis antara pekerja, dunia usaha, dan pemerintah.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Tugas dan fungsi</h2>
              <p className="text-base leading-8">
                Dinas Ketenagakerjaan Kabupaten Sleman bertugas melaksanakan urusan pemerintahan di bidang ketenagakerjaan berdasarkan peraturan perundang-undangan dan kebijakan daerah. Dalam pelaksanaannya, dinas berperan dalam pengelolaan informasi tenaga kerja, pelatihan, penempatan, serta pengawasan dan pemberdayaan tenaga kerja di wilayah Sleman.
              </p>
            </section>
          </div>

          <div className="mt-10">
            <a
              href="/struktur-organisasi"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-600/25 transition hover:bg-emerald-700"
            >
              Lihat Struktur Organisasi
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
