import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/videos", label: "Videos" },
  { href: "/testimonies", label: "Testimonies" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  return (
    <header className="border-b border-navy-100 bg-paper/90 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-navy-900 tracking-tight"
        >
          Oscar Li<span className="text-gold-500">.</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-navy-700 hover:text-gold-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
