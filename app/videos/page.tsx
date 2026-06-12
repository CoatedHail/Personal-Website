const placeholders = [
  { title: "Lesson 1 — The first five minutes", duration: "6 min" },
  { title: "Lesson 2 — When the student is stuck", duration: "8 min" },
  { title: "Lesson 3 — Asking the right questions", duration: "7 min" },
  { title: "Lesson 4 — Handling frustration", duration: "5 min" },
  { title: "Lesson 5 — Building real confidence", duration: "9 min" },
  { title: "Lesson 6 — Ending a session well", duration: "4 min" },
];

export default function Videos() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-4">
        CURRICULUM
      </p>
      <h1 className="font-serif text-5xl font-semibold text-navy-900 leading-tight">
        Training videos
      </h1>
      <p className="mt-4 text-navy-700 max-w-2xl">
        Six lessons. About 40 minutes total. Watch in order or jump to what
        you need.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholders.map((v, i) => (
          <div
            key={v.title}
            className="border border-navy-100 bg-white hover:border-gold-500 transition-colors"
          >
            <div className="aspect-video bg-navy-900 flex items-center justify-center text-gold-500 font-serif text-3xl">
              {i + 1}
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-semibold text-navy-900 leading-snug">
                {v.title}
              </h3>
              <p className="mt-2 text-xs text-navy-500 tracking-wide">
                {v.duration} · placeholder
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
