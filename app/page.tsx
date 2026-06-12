import Link from "next/link";

const skills = [
  {
    n: "01",
    t: "The first five minutes",
    d: "How you start a session decides how the next forty go. Learn the open that makes a student relax and trust you.",
  },
  {
    n: "02",
    t: "When the student is stuck",
    d: "Not telling them the answer is the whole job. Three moves that get them unstuck without taking over.",
  },
  {
    n: "03",
    t: "Asking the right questions",
    d: "\"Do you get it?\" is the worst question in tutoring. Better prompts that surface what they actually know.",
  },
  {
    n: "04",
    t: "Handling frustration",
    d: "A student near tears is the moment most tutors lose. The script that turns it into the breakthrough.",
  },
  {
    n: "05",
    t: "Building real confidence",
    d: "Praise that works and praise that backfires. The exact words that build a student who believes they can.",
  },
  {
    n: "06",
    t: "Ending a session well",
    d: "What a student remembers most is the last two minutes. How to make them want the next session.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-paper">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <p className="text-gold-500 tracking-[0.2em] text-xs font-semibold mb-6">
            HOW TO TUTOR
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            Teaching is a skill.{" "}
            <span className="text-gold-300">Anyone can learn it.</span>
          </h1>
          <p className="mt-6 text-lg text-navy-100 max-w-2xl leading-relaxed">
            A free curriculum on how to actually teach — built by a high
            schooler who co-founded a summer camp, trained the tutors who ran
            it, and watched what worked and what didn't.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/videos"
              className="bg-gold-500 text-navy-900 font-semibold px-6 py-3 hover:bg-gold-300 transition-colors"
            >
              Start the curriculum
            </Link>
            <Link
              href="/about"
              className="border border-gold-500 text-gold-500 font-semibold px-6 py-3 hover:bg-gold-500 hover:text-navy-900 transition-colors"
            >
              About Oscar
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-3">
          THE CURRICULUM
        </p>
        <h2 className="font-serif text-4xl font-semibold text-navy-900 leading-tight max-w-3xl">
          Six lessons every tutor wishes they'd had on day one.
        </h2>
        <p className="mt-4 text-navy-700 max-w-2xl">
          Each one is a short video plus a quiz. Watch in order or jump to the
          one you need before your next session.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div
              key={s.n}
              className="bg-white border border-navy-100 p-6 hover:border-gold-500 transition-colors"
            >
              <div className="text-gold-500 font-serif text-3xl font-semibold">
                {s.n}
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mt-2 leading-snug">
                {s.t}
              </h3>
              <p className="mt-2 text-sm text-navy-700 leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
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

      {/* Why this exists */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-3">
          WHY THIS EXISTS
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900 leading-tight">
          For students who want to make a difference by teaching.
        </h2>
        <p className="mt-6 text-navy-700 leading-relaxed">
          When I co-founded CACA Summer Camp and trained 10+ tutors in a
          week, I realized nobody teaches you how to teach. The handbook I
          wrote for them became this site — open and free, so the next person
          who starts something doesn't have to figure it all out alone.
        </p>
        <Link
          href="/about"
          className="inline-block mt-8 bg-navy-900 text-paper font-semibold px-6 py-3 hover:bg-navy-700 transition-colors"
        >
          More about me →
        </Link>
      </section>
    </>
  );
}
