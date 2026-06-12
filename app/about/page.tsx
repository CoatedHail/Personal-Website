const accomplishments = {
  leadership: [
    {
      title: "Co-founder, CACA Summer Camp",
      meta: "2025 · 6 weeks",
      body: "Co-founded a tutoring-focused summer camp from scratch. Hired and trained every tutor on staff, designed the daily program, and ran day-to-day operations across the full 6-week session.",
    },
    {
      title: "Raised $15,000+ in sponsorships",
      meta: "Fundraising",
      body: "Pitched local businesses and family networks to fund camp operations and need-based scholarships, so cost was never a reason a kid couldn't attend.",
    },
  ],
  teaching: [
    {
      title: "Trained the tutoring staff at CACA",
      meta: "Curriculum design",
      body: "Wrote the internal tutor handbook covering session structure, questioning techniques, handling frustration, and feedback — the same material this site now teaches publicly.",
    },
    {
      title: "[Add a teaching accomplishment]",
      meta: "Placeholder",
      body: "Drop in another teaching, tutoring, or mentorship credit — a class you've TA'd, students you've mentored, a workshop you've run.",
    },
  ],
  academic: [
    {
      title: "[Add an academic award or honor]",
      meta: "Placeholder",
      body: "Awards, contests, AP/IB performance, research, anything that shows the rigor side of your profile.",
    },
    {
      title: "[Add another academic credit]",
      meta: "Placeholder",
      body: "Honor roll, competition placements, summer programs, etc.",
    },
  ],
};

function Group({
  label,
  items,
}: {
  label: string;
  items: typeof accomplishments.leadership;
}) {
  return (
    <div className="mt-16">
      <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-4">
        {label}
      </p>
      <div className="space-y-8">
        {items.map((it) => (
          <article
            key={it.title}
            className="border-l-2 border-navy-100 pl-6 hover:border-gold-500 transition-colors"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-serif text-xl font-semibold text-navy-900">
                {it.title}
              </h3>
              <span className="text-xs text-navy-500 tracking-wide">
                {it.meta}
              </span>
            </div>
            <p className="mt-2 text-navy-700 leading-relaxed">{it.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-4">
        ABOUT
      </p>
      <h1 className="font-serif text-5xl font-semibold text-navy-900 leading-tight">
        Hi, I'm Oscar.
      </h1>
      <p className="mt-6 text-lg text-navy-700 leading-relaxed">
        I'm a junior in high school and the co-founder of CACA Summer Camp. I
        built this site to teach a skill nobody hands you: how to actually
        tutor someone well.
      </p>

      <div className="mt-10 grid sm:grid-cols-[160px_1fr] gap-8 items-start">
        <div className="w-[160px] h-[200px] bg-navy-100 border border-navy-100 flex items-center justify-center text-navy-500 text-xs">
          PHOTO
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">
            The short version
          </h2>
          <p className="mt-3 text-navy-700 leading-relaxed">
            Six weeks running a camp taught me more about teaching than years
            of being a student. Every accomplishment below traces back to one
            idea: the best way to learn something is to teach it to someone
            else.
          </p>
        </div>
      </div>

      <Group label="LEADERSHIP" items={accomplishments.leadership} />
      <Group label="TEACHING" items={accomplishments.teaching} />
      <Group label="ACADEMIC" items={accomplishments.academic} />

      <div className="mt-20 border-l-2 border-gold-500 pl-6 bg-navy-50 py-6 pr-6">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">
          Why I built this site
        </h2>
        <p className="mt-4 text-navy-700 leading-relaxed italic">
          [Placeholder: 2–4 sentence story about why teaching tutors matters
          to you. The story you'd tell on a college essay. Drop it in and the
          site picks it up immediately.]
        </p>
      </div>
    </div>
  );
}
