"use client";

import { useEffect, useState } from "react";

type FontSize = "small" | "normal" | "large" | "larger";

const fontScales: Record<FontSize, number> = {
  small: 90,
  normal: 100,
  large: 115,
  larger: 130,
};

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [speech, setSpeech] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontScales[fontSize]}%`;
    root.classList.toggle("accessibility-high-contrast", highContrast);
    root.classList.toggle("accessibility-grayscale", grayscale);
    root.classList.toggle("accessibility-underline-links", underlineLinks);
    root.classList.toggle("accessibility-reading-guide", readingGuide);
    root.classList.toggle("dark", darkMode);
    window.localStorage.setItem("disnaker-dark-mode", String(darkMode));

    return () => {
      root.style.fontSize = "";
      root.classList.remove(
        "accessibility-high-contrast",
        "accessibility-grayscale",
        "accessibility-underline-links",
        "accessibility-reading-guide",
        "dark",
      );
    };
  }, [darkMode, fontSize, grayscale, highContrast, readingGuide, speech, underlineLinks]);

  useEffect(() => {
    setDarkMode(window.localStorage.getItem("disnaker-dark-mode") === "true");
  }, []);

  const resetSettings = () => {
    setFontSize("normal");
    setHighContrast(false);
    setGrayscale(false);
    setUnderlineLinks(false);
    setReadingGuide(false);
    setSpeech(false);
    setDarkMode(false);
    window.speechSynthesis?.cancel();
  };

  const speakPage = () => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    if (speech) {
      window.speechSynthesis.cancel();
      setSpeech(false);
      return;
    }

    const text = document.querySelector("main")?.textContent?.trim();
    if (!text) {
      return;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    setSpeech(true);
  };

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50 sm:bottom-6 sm:left-6">
        <button
          type="button"
          aria-label="Buka menu aksesibilitas"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#205f94] text-2xl text-white shadow-lg transition hover:bg-[#174b75]"
        >
          ♿
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-y-0 right-0 z-[60] w-[min(27rem,100vw)] overflow-y-auto border-l border-[#d3e0ee] bg-white shadow-[-12px_0_40px_rgba(15,23,42,0.15)]">
          <header className="flex items-center justify-between border-b border-[#d3e0ee] px-3 py-4 sm:px-5">
            <h2 className="text-[1.4rem] font-bold text-[#111827]">Aksesibilitas</h2>
            <button
              type="button"
              aria-label="Tutup menu aksesibilitas"
              onClick={() => setIsOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#c9d8e8] text-3xl font-light text-[#46647d] transition hover:bg-[#eef4f9]"
            >
              ×
            </button>
          </header>

          <div className="space-y-7 px-3 py-6 sm:px-5">
            <section>
              <h3 className="mb-3 text-base font-bold uppercase tracking-[0.14em] text-[#55718b]">Ukuran teks</h3>
              <div className="grid grid-cols-4 gap-2">
                {([
                  ["small", "A-"],
                  ["normal", "A"],
                  ["large", "A+"],
                  ["larger", "A++"],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFontSize(value)}
                    aria-pressed={fontSize === value}
                    className={`h-[4.15rem] rounded-xl border text-xl font-bold transition ${
                      fontSize === value
                        ? "border-[#205f94] bg-[#205f94] text-white"
                        : "border-[#c9d8e8] bg-white text-[#172b40] hover:bg-[#eef4f9]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-base font-bold uppercase tracking-[0.14em] text-[#55718b]">Tampilan</h3>
              <div className="space-y-2">
                <SettingToggle
                  title="Mode gelap"
                  description="Tampilan lebih nyaman pada cahaya rendah"
                  checked={darkMode}
                  onChange={() => setDarkMode((current) => !current)}
                />
                <SettingToggle
                  title="Kontras tinggi"
                  description="Hitam putih bertepi tegas"
                  checked={highContrast}
                  onChange={() => setHighContrast((current) => !current)}
                />
                <SettingToggle
                  title="Mode abu-abu"
                  description="Menghilangkan seluruh warna"
                  checked={grayscale}
                  onChange={() => setGrayscale((current) => !current)}
                />
                <SettingToggle
                  title="Garis bawah tautan"
                  description="Menandai setiap tautan"
                  checked={underlineLinks}
                  onChange={() => setUnderlineLinks((current) => !current)}
                />
                <SettingToggle
                  title="Panduan baca"
                  description="Garis mengikuti titik baca"
                  checked={readingGuide}
                  onChange={() => setReadingGuide((current) => !current)}
                />
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-base font-bold uppercase tracking-[0.14em] text-[#55718b]">Suara</h3>
              <SettingToggle
                title="Bantuan suara"
                description="Memakai suara Google Bahasa Indonesia"
                checked={speech}
                onChange={speakPage}
              />
              <p className="mt-3 rounded-xl bg-[#eaf1f8] px-4 py-3 text-sm leading-6 text-[#55718b]">
                Suara ini berasal dari layanan daring, jadi teks yang dibacakan dikirim ke penyedia suara dan bunyinya mulai sesaat kemudian.
              </p>
            </section>

            <button
              type="button"
              onClick={resetSettings}
              className="w-full rounded-xl border border-[#abc5df] bg-[#eaf1f8] px-5 py-4 text-lg font-bold text-[#111827] transition hover:bg-[#dceaf6]"
            >
              Setel ulang semua
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

type SettingToggleProps = {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
};

function SettingToggle({ title, description, checked, onChange }: SettingToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`flex min-h-[4.6rem] w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
        checked ? "border-[#c1d4e8] bg-[#e8f0f8]" : "border-[#c9d8e8] bg-white hover:bg-[#f7fafc]"
      }`}
    >
      <span className="pr-4">
        <span className="block text-lg font-medium leading-6 text-[#172b40]">{title}</span>
        <span className="block text-base leading-6 text-[#55718b]">{description}</span>
      </span>
      <span className={`relative h-8 w-14 shrink-0 rounded-full border transition ${checked ? "border-[#205f94] bg-[#205f94]" : "border-[#abc5df] bg-[#eaf1f8]"}`}>
        <span className={`absolute top-1 h-6 w-6 rounded-full bg-[#55718b] shadow-sm transition ${checked ? "left-7 bg-white" : "left-1"}`} />
      </span>
    </button>
  );
}
