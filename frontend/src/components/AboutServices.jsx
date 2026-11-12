import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CarViewer3D from './CarViewer3D';

const services = [
  { title: 'Self‑drive rentals', desc: 'Daily, weekly, and monthly options with unlimited mileage packages.' },
  { title: 'Chauffeur service', desc: 'Professional drivers for airport transfers, events, or business meetings.' },
  { title: 'Long‑term leasing', desc: 'Flexible corporate and personal leases with maintenance included.' },
  { title: 'Door‑to‑door delivery', desc: 'We bring the car to you, anywhere in the metro area.' },
];

const fleet = [
  { 
    name: 'Tesla Model 3', desc: 'Electric, autopilot, 300+ mi range.', colorHex: '#e2e8f0',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&auto=format&fit=crop&q=80',
    specs: [
      { label: 'Range', value: '358 miles' },
      { label: '0-60 mph', value: '3.1s' },
      { label: 'Top Speed', value: '162 mph' },
      { label: 'Drivetrain', value: 'AWD' }
    ]
  },
  { 
    name: 'Jeep Grand Cherokee', desc: 'Spacious SUV with 4x4, perfect for escapes.', colorHex: '#1e293b',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80',
    specs: [
      { label: 'Engine', value: '3.6L V6' },
      { label: 'Towing', value: '7,200 lbs' },
      { label: 'Drivetrain', value: '4x4' },
      { label: 'Seats', value: '5 Adults' }
    ]
  },
  { 
    name: 'BMW 4 Series', desc: 'Sporty coupe with premium sound.', colorHex: '#1d4ed8',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop&q=80',
    specs: [
      { label: 'Engine', value: '2.0L Turbo' },
      { label: 'Horsepower', value: '255 hp' },
      { label: '0-60 mph', value: '5.3s' },
      { label: 'Drivetrain', value: 'RWD' }
    ]
  },
  { 
    name: 'Mercedes V-Class', desc: 'Luxury van for groups up to 7.', colorHex: '#475569',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&auto=format&fit=crop&q=80',
    specs: [
      { label: 'Seats', value: '7 Adults' },
      { label: 'Luggage', value: '6 Bags' },
      { label: 'Features', value: 'Captain Chairs' },
      { label: 'Drivetrain', value: 'RWD' }
    ]
  },
];

const values = [
  { icon: '🔑', title: 'No hidden fees', desc: 'What you see is what you pay. Insurance and taxes included.' },
  { icon: '⏱️', title: '5‑minute pickup', desc: 'Digital check‑in and express handover at our downtown hub.' },
  { icon: '🛡️', title: '24/7 support', desc: 'Real humans on call, plus roadside assistance anywhere.' },
  { icon: '🌿', title: 'Hybrid & electric', desc: 'Over 30% of our fleet is electrified for a greener ride.' },
];

export default function AboutServices() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- ABOUT SECTION --- */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0b1a2f] mb-4">About Us & Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          We're redefining automotive rentals with a focus on quality, transparency, and personal service — no hidden fees, no long queues.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#0b1a2f]">Who we are</h3>
            <p className="text-gray-700 mb-4">
              DriveLux is a boutique rental agency founded by car enthusiasts who believe renting should feel as good as driving. We keep our fleet fresh, our process simple, and our team genuinely helpful.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you need a sleek sedan for a business trip, an SUV for a weekend getaway, or a compact for city errands, we've got you covered — with flexible daily, weekly, and monthly plans.
            </p>
            <div className="bg-[#ebf4ff] p-6 rounded-2xl border-l-4 border-[#2b6cb0] font-medium text-[#1a365d] space-y-1">
              <p>★ 4.9 average rating from 800+ renters</p>
              <p>★ 98% on-time vehicle handover</p>
              <p>★ Free cancellation up to 24h</p>
            </div>
          </div>

          {/* --- SERVICES SECTION --- */}
          <div id="services">
            <h3 className="text-2xl font-semibold mb-4 text-[#0b1a2f]">Our services</h3>
            <ul className="space-y-4">
              {services.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2b6cb0] text-white text-sm font-bold flex items-center justify-center mt-1">✓</span>
                  <span><strong className="text-[#0b1a2f]">{s.title}</strong> — {s.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- FLEET SECTION WITH IMAGES & 3D --- */}
        <div id="fleet" className="bg-gray-50 rounded-[2rem] p-8 md:p-10 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-[#0b1a2f]">
            🚗 Fleet highlights <span className="text-sm font-normal text-gray-500 ml-2 block sm:inline">(Click a car to view in 3D)</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((car, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedCar(car)}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col overflow-hidden"
              >
                {/* Image Container with Zoom Effect */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                {/* Text Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold mb-2 text-[#0b1a2f]">{car.name}</h4>
                  <p className="text-sm text-gray-600 flex-grow">{car.desc}</p>
                  
                  {/* Hover hint */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[#2b6cb0] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>View 3D Model</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- VALUES / WHY CHOOSE US SECTION --- */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#0b1a2f]">Why DriveLux?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-[2rem] bg-[#ebf4ff] flex items-center justify-center text-3xl">
                  {v.icon}
                </div>
                <h4 className="font-semibold text-lg mb-1 text-[#0b1a2f]">{v.title}</h4>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- 3D OVERLAY MODAL --- */}
      <AnimatePresence>
        {selectedCar && (
          <CarViewer3D 
            car={selectedCar} 
            onClose={() => setSelectedCar(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
}