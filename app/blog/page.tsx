const posts = [
  {
    href: "/lessons/vibe-coding-studio.html",
    external: true,
    title: "Vibe Coding Studio — build real things with an AI agent",
    date: "Featured",
    excerpt:
      "A short, practical course on driving AI coding agents without losing the plot. 10 lessons + quiz.",
  },
  {
    href: "#",
    external: false,
    title: "What I learned in my first tutoring session",
    date: "Coming soon",
    excerpt:
      "The lesson plan I made was useless in the first ten minutes. Here's what worked instead.",
  },
  {
    href: "#",
    external: false,
    title: "Why we started CACA Summer Camp",
    date: "Coming soon",
    excerpt:
      "A short story about $15,000, six weeks, and the kids who showed up.",
  },
  {
    href: "#",
    external: false,
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
        {posts.map((p) => {
          const Title = (
            <h2 className="font-serif text-2xl font-semibold text-navy-900 mt-1 hover:text-gold-700 transition-colors">
              {p.title}
            </h2>
          );
          return (
            <li key={p.title} className="py-8">
              <p className="text-xs text-navy-500 tracking-wide">{p.date}</p>
              {p.href !== "#" ? (
                <a href={p.href} target={p.external ? "_blank" : undefined}>
                  {Title}
                </a>
              ) : (
                Title
              )}
              <p className="mt-2 text-navy-700">{p.excerpt}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
