import { motion } from 'framer-motion';
import { ArrowUp, GitBranch, Mail } from 'lucide-react';

const ThankYou = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-between py-20 px-6 md:px-12 bg-black relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-t-full pointer-events-none"></div>

      <div className="container mx-auto flex-grow flex flex-col items-center justify-center text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display uppercase text-6xl md:text-8xl mb-10 text-cream leading-[0.9]"
        >
          THANK YOU<br />
          <span className="text-primary text-4xl md:text-6xl">FOR VISITING MY PORTFOLIO!</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-cream/70 text-xl md:text-2xl max-w-2xl leading-relaxed mb-16"
        >
          Thank you for exploring my work. I’m always interested in new projects, internships, collaborations and opportunities to create meaningful digital solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#contact" className="px-8 py-4 bg-primary text-black font-body font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors flex items-center gap-3">
            <Mail size={20} /> Let's Talk
          </a>
          <a href="https://github.com/SivasuriyanRaja" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-cream font-body font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors flex items-center gap-3">
            <GitBranch size={20} /> GitHub
          </a>
        </motion.div>
      </div>

      {/* Footer Element */}
      <div className="container mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
        <p className="font-body text-cream/40 text-sm uppercase tracking-widest">© {new Date().getFullYear()} Sivasuriyan Raja</p>
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cream/70 hover:text-primary hover:border-primary transition-colors group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ThankYou;
