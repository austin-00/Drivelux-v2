export default function Footer() {
  return (
    <footer className="bg-[#0b1a2f] text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold text-white">
          Drive<span className="text-blue-300">Lux</span>
        </div>
        <p className="text-sm text-center md:text-left">
          © 2025 DriveLux Automotive Rentals. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}