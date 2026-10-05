import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contactDetails, faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Dinas Ketenagakerjaan Sleman melalui telepon, email, WhatsApp, dan formulir pengaduan.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Kontak
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Hubungi kami
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-white">Dinas Ketenagakerjaan Sleman</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Alamat</p>
              <p className="mt-2 text-base leading-7 text-slate-300">{contactDetails.address}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Telepon</p>
              {contactDetails.phone.map((number) => (
                <p key={number} className="mt-2 text-base leading-7 text-slate-300">
                  {number}
                </p>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Email</p>
              <p className="mt-2 text-base leading-7 text-slate-300">{contactDetails.email}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Jam Layanan</p>
              <p className="mt-2 text-base leading-7 text-slate-300">{contactDetails.officeHours}</p>
            </div>

            <div>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <section id="faq" className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Pertanyaan yang sering diajukan
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
