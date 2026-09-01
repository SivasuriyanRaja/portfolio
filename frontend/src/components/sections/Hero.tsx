import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Decorative Handwritten Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-script text-5xl md:text-8xl mb-[-30px] md:mb-[-60px] z-20"
          style={{ transform: 'rotate(-10deg)' }}
        >
          Creative
        </motion.p>

        {/* Massive Background Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display uppercase text-[15vw] leading-none text-cream/90 tracking-normal"
        >
          PORTFOLIO
        </motion.h1>

        {/* Portrait Overlay (Placeholder for now) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-[25%] w-64 h-80 md:w-96 md:h-[32rem] rounded-[100px] overflow-hidden border-4 border-black/50 shadow-2xl"
        >
          <img 
            src="/profile.png" 
            alt="Sivasuriyan Raja" 
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="font-body text-xs font-bold uppercase tracking-widest text-cream/60 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
