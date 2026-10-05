"use client";

import { useMemo, useState } from "react";
import SafeImage from "@/components/SafeImage";
import { newsPosts } from "@/lib/site-data";

const categories = ["Semua", ...new Set(newsPosts.map((item) => item.category))];

export default function Page() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const filteredPosts = useMemo(() => {
    return newsPosts.filter((post) => {
      const matchesCategory = category === "Semua" || post.category === category;
      const keyword = search.trim().toLowerCase();
      const matchesSearch =
        keyword.length === 0 ||
        post.title.toLowerCase().includes(keyword) ||
        post.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Berita
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Informasi dan pengumuman terbaru
        </h1>
      </div>

      <div className="mb-8 flex flex-col gap-3 rounded-[1.75rem] border border-emerald-400/80 bg-white p-3 shadow-sm md:flex-row md:items-center">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Cari berita"
          placeholder="Cari judul atau kategori..."
          className="h-14 w-full rounded-full border border-emerald-400 bg-white px-5 text-base text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-emerald-500 md:flex-1"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter kategori berita"
          className="h-14 min-w-[170px] rounded-full border border-slate-200 bg-slate-100 px-4 text-base text-slate-700 outline-none transition focus:border-emerald-400 md:w-[190px]"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600">
          Tidak ada berita yang sesuai dengan pencarian Anda.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <SafeImage src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold leading-7 text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm text-slate-500">{post.date}</p>
                <a href={post.href} className="mt-5 inline-flex text-sm font-semibold text-emerald-700">
                  Baca selengkapnya →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
