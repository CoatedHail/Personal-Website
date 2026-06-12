const placeholders = [
  {
    quote:
      "Working with Oscar at CACA changed how I think about teaching. He showed me that patience is a skill, not a personality trait.",
    name: "Placeholder Tutor",
    role: "Tutor, CACA Summer Camp",
  },
  {
    quote:
      "The kids at our camp adored him. He made them feel like the smartest people in the room.",
    name: "Placeholder Co-Counselor",
    role: "Counselor",
  },
  {
    quote:
      "Oscar's training got me through my first real tutoring job. I knew exactly what to do when my student froze up.",
    name: "Placeholder Student Tutor",
    role: "Volunteer Tutor",
  },
  {
    quote:
      "Hands down the best training I've done. It's specific, honest, and actually useful.",
    name: "Placeholder Teacher",
    role: "Middle School Teacher",
  },
];

export default function Testimonies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-gold-700 tracking-[0.2em] text-xs font-semibold mb-4">
        TESTIMONIES
      </p>
      <h1 className="font-serif text-5xl font-semibold text-navy-900 leading-tight">
        From the people who lived it.
      </h1>
      <p className="mt-4 text-navy-700 max-w-2xl">
        Tutors, teachers, and students who worked with Oscar or used this
        training.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {placeholders.map((t) => (
          <figure
            key={t.name}
            className="bg-white border border-navy-100 p-8"
          >
            <blockquote className="font-serif text-lg text-navy-900 leading-snug italic">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <div className="font-semibold text-navy-900">{t.name}</div>
              <div className="text-navy-500">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
