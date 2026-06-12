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
        I'm a junior in high school and the co-founder of CACA Summer Camp,
        where I spent six weeks teaching kids and training the tutors who
        worked alongside me. This site is the training I built for them — now
        open to anyone.
      </p>

      <div className="mt-12 grid sm:grid-cols-[140px_1fr] gap-8 items-start">
        <div className="w-[140px] h-[140px] bg-navy-100 border border-navy-100 flex items-center justify-center text-navy-500 text-xs">
          PHOTO
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">
            Highlights
          </h2>
          <ul className="mt-4 space-y-3 text-navy-700">
            <li>
              <span className="text-gold-700 font-semibold">
                Co-founder, CACA Summer Camp
              </span>{" "}
              — built and ran a 6-week tutoring program from scratch.
            </li>
            <li>
              <span className="text-gold-700 font-semibold">
                Raised over $15,000
              </span>{" "}
              to fund camp operations and scholarships.
            </li>
            <li className="text-navy-500 italic">
              [Two more accomplishments coming — placeholder]
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-l-2 border-gold-500 pl-6">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">
          Why I built this
        </h2>
        <p className="mt-4 text-navy-700 leading-relaxed italic">
          [Placeholder: 1–2 sentence story about why training tutors matters
          to you — drop it in and the site picks it up.]
        </p>
      </div>
    </div>
  );
}
