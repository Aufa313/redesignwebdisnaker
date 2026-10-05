import DetailShell from "@/components/DetailShell";

const services = [
  {
    slug: "akses-kerja",
    badge: "Layanan",
    title: "Akses Kerja",
    date: "Layanan publik Disnaker Sleman",
    image:
      "https://disnaker.slemankab.go.id/wp-content/uploads/2023/01/Ilustrasi-pelatihan-kerja.jpg",
    summary:
      "Akses Kerja adalah layanan utama yang membantu masyarakat memperoleh informasi pekerjaan, persyaratan administrasi, dan dukungan dalam proses pencarian kerja.",
    sections: [
      {
        heading: "Fungsi layanan",
        body: [
          "Layanan ini dirancang untuk memudahkan pencari kerja dalam memperoleh informasi lowongan yang relevan, mengelola kebutuhan administrasi, dan mengikuti proses rekrutmen secara lebih terarah.",
          "Melalui mekanisme yang sederhana dan terintegrasi, masyarakat dapat mengakses bantuan dari Disnaker Sleman secara lebih cepat dan efektif.",
        ],
      },
      {
        heading: "Siapa yang bisa memanfaatkan?",
        body: [
          "Semua masyarakat Sleman yang sedang mencari pekerjaan, membutuhkan penguatan keterampilan, atau ingin memperoleh akses informasi pasar kerja dapat memanfaatkan layanan ini.",
          "Layanan ini juga sangat bermanfaat bagi perusahaan yang ingin menjalin kerja sama dalam menyalurkan tenaga kerja dan memperluas jaringan perekrutan.",
        ],
      },
    ],
  },
  {
    slug: "balai-latihan-kerja",
    badge: "Layanan",
    title: "Balai Latihan Kerja",
    date: "Program pelatihan dan kompetensi",
    image:
      "https://disnaker.slemankab.go.id/wp-content/uploads/2023/01/Ilustrasi-pelatihan-kerja.jpg",
    summary:
      "Balai Latihan Kerja menjadi wadah peningkatan keterampilan, pelatihan vokasi, dan penguatan kompetensi agar masyarakat siap bersaing di dunia kerja.",
    sections: [
      {
        heading: "Program pelatihan",
        body: [
          "Program pelatihan mencakup dasar kerja, keterampilan teknis, pelatihan keterampilan khusus, dan penguatan soft skill agar peserta lebih siap menghadapi kebutuhan pasar kerja.",
          "Berbagai modul disusun agar dapat menyesuaikan kebutuhan dunia usaha dan industri yang berkembang di wilayah Sleman maupun sekitarnya.",
        ],
      },
      {
        heading: "Target peserta",
        body: [
          "Peserta program dapat berasal dari masyarakat umum, lulusan baru, hingga pekerja yang ingin meningkatkan kompetensi sesuai kebutuhan industri.",
          "Layanan ini sangat relevan untuk mendorong kualitas sumber daya manusia yang siap kerja dan berdaya saing tinggi.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) ?? services[0];

  return (
    <DetailShell
      badge={service.badge}
      title={service.title}
      date={service.date}
      image={service.image}
      summary={service.summary}
      sections={service.sections}
      ctaLabel="Kembali ke layanan"
      ctaHref="/"
    />
  );
}
