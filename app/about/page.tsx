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
      title: "Trained 10+ tutors for CACA Summer Camp",
      meta: "Curriculum + on-the-job coaching",
      body: "Wrote the internal tutor handbook covering session structure, questioning techniques, handling frustration, and feedback — then ran the weekly check-ins where every tutor brought back what worked and what didn't. The handbook became this site.",
    },
    {
      title: "Teacher, Northwest Chinese School",
      meta: "Volunteer instructor",
      body: "Teach at Northwest Chinese School on weekends — a community language and culture program. Where I got my first real reps in front of a class, not just one student.",
    },
  ],
  research: [
    {
      title: "Research — neurodiversity",
      meta: "Independent study",
      body: "Investigating how neurodivergent students learn differently and what tutoring practices actually serve them well — beyond the one-size-fits-all advice in most teaching guides.",
    },
    {
      title: "Research — misinformation across demographics",
      meta: "Independent study",
      body: "Studying how different demographic groups respond to misinformation and which framings change minds. Origin of the 'Fake News Detector' work that taught me how much teaching matters: people don't need more facts, they need better thinking.",
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
      <Group label="RESEARCH" items={accomplishments.research} />

      <div className="mt-20 border-l-2 border-gold-500 pl-6 bg-navy-50 py-6 pr-6">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">
          Why I built this site
        </h2>
        <p className="mt-4 text-navy-700 leading-relaxed">
          I built this site for students who want to make a difference in
          their communities by creating and teaching. Most of us are handed a
          textbook and told to figure it out — nobody trains us in the actual
          skill of helping another person understand something. This is the
          training I wish I'd had, made open for the next person who decides
          to start something.
        </p>
      </div>
    </div>
  );
}
