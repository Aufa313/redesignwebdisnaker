import DetailShell from "@/components/DetailShell";

const jobs = [
  {
    slug: "security-mirota-pasaraya",
    badge: "Lowongan",
    title: "Lowongan Kerja Security – Mirota Pasaraya",
    date: "02 September 2026",
    image:
      "https://disnaker.slemankab.go.id/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-02-at-1.06.26-PM.jpeg",
    summary:
      "Mirota Pasaraya membuka kesempatan kerja bagi kandidat yang memiliki disiplin tinggi, siap bekerja di lingkungan retail, dan memahami tugas pengamanan area operasional.",
    sections: [
      {
        heading: "Persyaratan umum",
        body: [
          "Pelamar diutamakan berusia maksimal sesuai ketentuan perusahaan, memiliki sikap disiplin, dan siap bertanggung jawab atas keamanan area kerja serta pengunjung.",
          "Pengalaman di bidang keamanan menjadi nilai tambah, namun kandidat yang memiliki semangat kerja tinggi juga tetap dipertimbangkan.",
        ],
      },
      {
        heading: "Tugas utama",
        body: [
          "Memantau keamanan area toko, menjaga ketertiban operasional, serta membantu menciptakan lingkungan kerja yang aman dan nyaman bagi seluruh karyawan dan pelanggan.",
          "Kandidat yang lolos seleksi akan menjalani proses onboarding sesuai standar perusahaan dan jadwal kerja yang ditentukan.",
        ],
      },
    ],
  },
  {
    slug: "chef-de-partie-java-village-resort",
    badge: "Lowongan",
    title: "Lowongan Kerja CDP (Chef De Partie) – Java Village Resort",
    date: "02 September 2026",
    image:
      "https://disnaker.slemankab.go.id/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-02-at-9.13.49-AM.jpeg",
    summary:
      "Java Village Resort membuka lowongan bagi kandidat yang memiliki kemampuan di bidang kuliner, khususnya dalam mengelola bagian produksi masakan sesuai standar kualitas hotel atau resort.",
    sections: [
      {
        heading: "Kualifikasi",
        body: [
          "Pelamar diharapkan memahami proses pengolahan makanan, menjaga kualitas rasa dan presentasi, serta mampu bekerja dalam tim di area dapur.",
          "Pengalaman kerja di kitchen hotel, restoran, atau resort menjadi nilai tambah yang signifikan bagi kandidat yang diterima.",
        ],
      },
      {
        heading: "Kebutuhan posisi",
        body: [
          "Posisi ini menuntut ketelitian dalam mengolah makanan, kepatuhan terhadap SOP dapur, serta kemampuan berkoordinasi dengan tim kitchen dan outlet terkait.",
          "Kandidat yang siap mengikuti prosedur kerja profesional, menjaga kebersihan, dan memiliki komitmen tinggi sangat kami harapkan.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug) ?? jobs[0];

  return (
    <DetailShell
      badge={job.badge}
      title={job.title}
      date={job.date}
      image={job.image}
      summary={job.summary}
      sections={job.sections}
      ctaLabel="Lihat lowongan lain"
      ctaHref="/"
    />
  );
}
