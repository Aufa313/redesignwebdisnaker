# Disnaker Sleman Redesign

Landing page redesign untuk website Dinas Ketenagakerjaan Kabupaten Sleman dengan konsep modern, bersih, mudah dibaca, dan tetap formal untuk kebutuhan layanan publik.

## Fitur

- Hero section dengan headline kuat dan CTA
- Layanan utama berbasis kartu besar
- Halaman profil dinas dan struktur organisasi
- Halaman layanan publik yang rapi dan mudah dibaca
- Section berita dan pengumuman
- Lowongan kerja terbaru
- Program unggulan dan pendampingan masyarakat
- Desain responsif untuk desktop dan mobile
- Visual modern dengan kombinasi gradient, foto, dan elemen UI yang ringan

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Prasyarat

Pastikan sudah terinstall:

- Node.js 18+
- npm

## Cara Menjalankan

1. Clone repository
2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka browser ke:

```bash
http://localhost:3000
```

## Struktur Proyek

```bash
app/
  berita/
  kontak/
  layanan/
  lowongan/
  profil-dinas/
  struktur-organisasi/
  globals.css
  layout.tsx
  page.tsx
components/
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  QuickServices.tsx
  DetailShell.tsx
```

## Catatan Desain

Proyek ini dibuat dengan referensi dari situs resmi Disnaker Sleman, namun diperbarui agar tampil lebih modern, ringkas, dan mudah dipahami. Fokus utamanya adalah:

- keterbacaan tinggi
- hierarki informasi jelas
- nuansa formal tapi tetap hidup
- penggunaan warna hijau/emerald dan biru untuk kesan profesional dan akrab

## Build Production

```bash
npm run build
```
