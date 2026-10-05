import DetailShell from "@/components/DetailShell";

const articles = [
  {
    slug: "taksi-pekerja-september-2026",
    badge: "Berita",
    title: "Info TAKSI PEKERJA – Fasilitasi Seleksi Pekerja September 2026",
    date: "28 Agustus 2026",
    image:
      "https://disnaker.slemankab.go.id/wp-content/uploads/2026/08/Orange-Yellow-Retro-Insights-Inspiration-Youtube-Thumbnail--1080x675.png",
    summary:
      "Program TAKSI PEKERJA kembali hadir sebagai salah satu bentuk fasilitasi perekrutan tenaga kerja kepada masyarakat Sleman yang membutuhkan akses kerja cepat dan terarah.",
    sections: [
      {
        heading: "Apa itu TAKSI PEKERJA?",
        body: [
          "TAKSI PEKERJA adalah program fasilitasi seleksi pekerja yang dibuat untuk mempercepat proses penjajakan dan perekrutan tenaga kerja dari masyarakat lokal ke perusahaan mitra yang membutuhkan tenaga kerja siap pakai.",
          "Melalui program ini, peserta memperoleh kesempatan untuk mengikuti seleksi yang dilakukan secara terstruktur, mulai dari persiapan berkas, pengisian data, hingga proses wawancara dan tes kerja.",
        ],
      },
      {
        heading: "Tujuan kegiatan",
        body: [
          "Kegiatan ini bertujuan membuka akses kerja bagi masyarakat Sleman secara lebih efisien, khususnya bagi mereka yang dibutuhkan di sektor industri, retail, layanan, dan kebutuhan kerja lainnya.",
          "Selain itu, kegiatan ini juga membantu perusahaan mitra mendapatkan tenaga kerja yang sesuai dengan kebutuhan perusahaan dengan proses yang lebih cepat dan lebih terorganisir.",
        ],
      },
    ],
  },
  {
    slug: "pemagangan-nasional-angkatan-ii-2026",
    badge: "Informasi",
    title: "Program Pemagangan Nasional Lulusan Perguruan Tinggi Angkatan II 2026",
    date: "24 Agustus 2026",
    image:
      "https://disnaker.slemankab.go.id/wp-content/uploads/2026/08/Pemagangan-150x150.jpg",
    summary:
      "Program pemagangan nasional merupakan kesempatan bagi lulusan perguruan tinggi untuk mengasah kompetensi di dunia kerja melalui pengalaman langsung di mitra industri.",
    sections: [
      {
        heading: "Kesiapan peserta",
        body: [
          "Peserta program pemagangan akan mengikuti proses seleksi dan pembekalan agar lebih siap menghadapi lingkungan kerja profesional di perusahaan mitra.",
          "Program ini membantu lulusan perguruan tinggi memperkuat pengalaman kerja dan menyesuaikan kemampuan mereka dengan kebutuhan pasar kerja saat ini.",
        ],
      },
      {
        heading: "Manfaat program",
        body: [
          "Dengan mengikuti pemagangan, peserta dapat menambah pengalaman, membangun jaringan kerja, serta meningkatkan peluang masuk ke dunia kerja setelah masa program berakhir.",
          "Disnaker Sleman terus mendorong terciptanya ekosistem kerja yang lebih inklusif dan berbasis kompetensi.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug) ?? articles[0];

  return (
    <DetailShell
      badge={article.badge}
      title={article.title}
      date={article.date}
      image={article.image}
      summary={article.summary}
      sections={article.sections}
      ctaLabel="Kembali ke beranda"
      ctaHref="/"
    />
  );
}
