import { motion } from 'framer-motion';

export default function Hero() {
  // Animation variants for staggering the text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delays each line of text
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-[3rem] pt-12 pb-20 mb-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-12 flex-wrap">
        
        {/* Left Side: Animated Text */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 min-w-[320px]"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#0b1a2f] mb-6">
            Premium rentals.<br />
            <span className="text-[#2b6cb0]">Zero compromise.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
            Discover a curated fleet of modern vehicles — flexible terms, transparent pricing, and a seamless experience from booking to return.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a 
              href="#fleet" 
              className="inline-block bg-[#0b1a2f] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1e2f46] transition-all duration-300 shadow-xl shadow-[#0b1a2f]/20 hover:shadow-2xl hover:-translate-y-1"
            >
              Explore our fleet →
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Image with Floating Effect */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex-1 min-w-[300px] relative perspective-1000"
        >
          {/* We wrap the image in another motion div to create an infinite gentle floating loop */}
          <motion.div
            animate={{ 
              y: [0, -12, 0], 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=1000&auto=format&fit=crop&q=80"
              alt="Premium sports car"
              className="w-full h-[420px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Glossy reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
          
          {/* Decorative background blob behind the car */}
          <div className="absolute -inset-4 bg-[#2b6cb0]/10 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
        </motion.div>

      </div>
    </section>
  );
}