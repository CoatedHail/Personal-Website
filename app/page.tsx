import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-paper">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <p className="text-gold-500 tracking-[0.2em] text-xs font-semibold mb-6">
            TUTOR ACADEMY
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            Train great tutors.{" "}
            <span className="text-gold-300">Change lives.</span>
          </h1>
          <p className="mt-6 text-lg text-navy-100 max-w-2xl leading-relaxed">
            A free curriculum from a teacher who's done the work. Videos, real
            testimonies, and a quiz to prove you're ready for your first
            student.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/videos"
              className="bg-gold-500 text-navy-900 font-semibold px-6 py-3 hover:bg-gold-300 transition-colors"
            >
              Start the course
            </Link>
            <Link
              href="/about"
              className="border border-gold-500 text-gold-500 font-semibold px-6 py-3 hover:bg-gold-500 hover:text-navy-900 transition-colors"
            >
              Meet Oscar
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid sm:grid-cols-3 gap-10">
        {[
          {
            t: "Real videos",
            d: "Bite-sized lessons covering the moments that make or break a tutoring session.",
          },
          {
            t: "Real testimonies",
            d: "Stories from teachers and former students — what works, what doesn't.",
          },
          {
            t: "Real practice",
            d: "Short quizzes after each lesson. Track your progress, prove you're ready.",
          },
        ].map((b) => (
          <div key={b.t}>
            <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2">
              {b.t}
            </h3>
            <p className="text-navy-700 leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      {/* Featured testimony */}
      <section className="bg-navy-50 border-y border-navy-100">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-6">
            FROM A FORMER STUDENT
          </p>
          <blockquote className="font-serif text-2xl sm:text-3xl text-navy-900 leading-snug italic">
            "Oscar made me feel like math was something I could actually do —
            not just something other kids were good at."
          </blockquote>
          <p className="mt-6 text-sm text-navy-700">— Placeholder testimony</p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900">
          Ready to teach?
        </h2>
        <p className="mt-4 text-navy-700 leading-relaxed">
          Start with the first lesson. No signup, no paywall, just the
          training I wish I'd had.
        </p>
        <Link
          href="/videos"
          className="inline-block mt-8 bg-navy-900 text-paper font-semibold px-6 py-3 hover:bg-navy-700 transition-colors"
        >
          Watch the first video
        </Link>
      </section>
    </>
  );
}
