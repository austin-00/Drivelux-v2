export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        <a href="#" className="text-2xl font-bold tracking-tight text-[#0b1a2f]">
          Drive<span className="text-[#2b6cb0]">Lux</span>
        </a>
        <nav>
          <ul className="flex gap-8 font-medium text-gray-700">
            <li><a href="#about" className="hover:text-[#2b6cb0] transition">About</a></li>
            <li><a href="#fleet" className="hover:text-[#2b6cb0] transition">Fleet</a></li>
            <li><a href="#services" className="hover:text-[#2b6cb0] transition">Services</a></li>
            <li><a href="#contact" className="hover:text-[#2b6cb0] transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}