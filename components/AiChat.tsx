"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const faq = [
  {
    keywords: ["lowongan", "kerja", "loker"],
    answer:
      "Informasi lowongan kerja dapat dilihat pada menu Lowongan Kerja. Pilih kategori lokal, luar daerah, atau luar negeri.",
  },
  {
    keywords: ["blk", "pelatihan", "latihan"],
    answer:
      "Informasi Balai Latihan Kerja (BLK) tersedia melalui menu Lowongan Kerja > Informasi BLK atau halaman Layanan.",
  },
  {
    keywords: ["kartu kuning", "ak 1", "ak-1"],
    answer:
      "Informasi persyaratan dan pengajuan Kartu Kuning (AK I) tersedia di menu Info Perizinan.",
  },
  {
    keywords: ["alamat", "lokasi", "kantor"],
    answer:
      "Kantor Disnaker Sleman berada di Jalan Parasamya Beran Tridadi Sleman Yogyakarta 55511. Anda juga dapat membuka halaman Hubungi Kami untuk informasi kontak.",
  },
  {
    keywords: ["profil", "visi", "misi", "sejarah"],
    answer:
      "Informasi profil, sejarah, visi dan misi, tugas dan fungsi, serta struktur organisasi tersedia di menu Profil.",
  },
];

function getAnswer(question: string) {
  const normalizedQuestion = question.toLowerCase();
  const matchedFaq = faq.find((item) =>
    item.keywords.some((keyword) => normalizedQuestion.includes(keyword)),
  );

  return (
    matchedFaq?.answer ??
    "Maaf, saya belum menemukan jawaban yang sesuai. Silakan coba tanyakan tentang lowongan kerja, BLK, Kartu Kuning, profil dinas, atau alamat kantor."
  );
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Halo! Saya asisten informasi Disnaker Sleman. Ada yang bisa saya bantu?",
    },
  ]);

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: trimmedQuestion },
      { role: "assistant", text: getAnswer(trimmedQuestion) },
    ]);
    setQuestion("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section className="mb-3 flex h-[min(32rem,calc(100vh-7rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <header className="flex items-center justify-between bg-emerald-700 px-5 py-4 text-white">
            <div>
              <p className="text-sm font-bold">Tanya AI</p>
              <p className="text-xs text-emerald-100">
                Asisten informasi Disnaker
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup Tanya AI"
              className="rounded-full p-1.5 text-emerald-100 transition hover:bg-emerald-600 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto rounded-br-md bg-emerald-600 text-white"
                    : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={submitQuestion}
            className="border-t border-slate-200 bg-white p-3"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 focus-within:border-emerald-500">
              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Tulis pertanyaan..."
                aria-label="Pertanyaan untuk Tanya AI"
                className="min-w-0 flex-1 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                aria-label="Kirim pertanyaan"
                className="rounded-xl bg-emerald-600 p-2 text-white transition hover:bg-emerald-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m5 12 14-7-4 14-3-6-7-1Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((currentState) => !currentState)}
        aria-expanded={isOpen}
        className="ml-auto flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition hover:bg-emerald-700"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 4v-4h0A2.5 2.5 0 0 1 5 12.5v-6Z" />
          <path d="M9 9h6M9 12h4" strokeLinecap="round" />
        </svg>
        Tanya AI
      </button>
    </div>
  );
}
