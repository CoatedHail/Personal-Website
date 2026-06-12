const posts = [
  {
    slug: "first-session",
    title: "What I learned in my first tutoring session",
    date: "Coming soon",
    excerpt:
      "The lesson plan I made was useless in the first ten minutes. Here's what worked instead.",
  },
  {
    slug: "why-camp",
    title: "Why we started CACA Summer Camp",
    date: "Coming soon",
    excerpt:
      "A short story about $15,000, six weeks, and the kids who showed up.",
  },
  {
    slug: "asking-questions",
    title: "The right way to ask 'do you get it?'",
    date: "Coming soon",
    excerpt:
      "Three better questions that actually tell you whether your student understands.",
  },
];

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-4">
        WRITING
      </p>
      <h1 className="font-serif text-5xl font-semibold text-navy-900 leading-tight">
        Notes from teaching.
      </h1>
      <p className="mt-4 text-navy-700">
        Short essays on tutoring, leadership, and what running a camp taught
        me.
      </p>

      <ul className="mt-12 divide-y divide-navy-100 border-y border-navy-100">
        {posts.map((p) => (
          <li key={p.slug} className="py-8">
            <p className="text-xs text-navy-500 tracking-wide">{p.date}</p>
            <h2 className="font-serif text-2xl font-semibold text-navy-900 mt-1 hover:text-gold-700 transition-colors">
              {p.title}
            </h2>
            <p className="mt-2 text-navy-700">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
