import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#0b1a2f] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          {/* Left Side: Info */}
          <div className="md:w-1/2 p-10 md:p-14 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2b6cb0] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to drive?</h2>
            <p className="text-gray-300 text-lg mb-10 relative z-10">
              Have a question about our fleet, need a custom quote, or ready to book? Drop us a message and our team will get back to you within the hour.
            </p>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">📍</div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400 text-sm">123 Downtown Ave, Metro City</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">📞</div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">✉️</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400 text-sm">hello@drivelux.example</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-1/2 p-10 md:p-14 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#0b1a2f]">Message Sent!</h3>
                <p className="text-gray-600">Thanks for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b6cb0] focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b6cb0] focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2b6cb0] focus:border-transparent outline-none transition resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#2b6cb0] text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}