export default function Footer() {
  return (
    <footer className="border-t border-navy-100 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-navy-700 flex flex-col sm:flex-row justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Oscar Li. Built to train tutors who
          change lives.
        </p>
        <p className="text-navy-500">CACA Summer Camp · Co-founder</p>
      </div>
    </footer>
  );
}
