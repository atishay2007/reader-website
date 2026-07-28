export default function Footer() {
  return (
    <footer className="border-t border-stone-300 bg-[#faf6ee]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm text-stone-600">
        <p>© {new Date().getFullYear()} श्री देशना</p>

        <p>Thoughtful Hindi Literature</p>
      </div>
    </footer>
  );
}