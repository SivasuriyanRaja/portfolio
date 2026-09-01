import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownCircle, X, Download } from 'lucide-react';

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="welcome" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 bg-black">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[1.1]">
            WELCOME TO<br />
            <span className="text-primary">MY PORTFOLIO</span>
          </h2>
          
          <div className="space-y-4">
            <h3 className="font-body text-xl md:text-2xl text-cream/90">
              Hi, I'm Sivasuriyan R<br />
              Software Developer & Machine Learning Enthusiast
            </h3>
            <p className="font-body text-cream/70 text-lg max-w-lg leading-relaxed">
              I'm a Computer Science student passionate about building real-world applications using Python, Machine Learning, Deep Learning, and modern web technologies.
            </p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-3 bg-primary text-black px-6 py-4 rounded-full font-body font-bold uppercase tracking-wider hover:bg-white transition-colors group"
          >
            <span>Click here for Resume</span>
            <ArrowDownCircle className="group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </motion.div>

        {/* Right Content: Abstract Visual Panels */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] flex justify-center items-center"
        >
          {/* Decorative panels to mimic Canva abstract orange visuals */}
          <div className="absolute w-64 h-80 bg-primary/20 rounded-[100px] border border-primary/50 -rotate-12 backdrop-blur-sm"></div>
          <div className="absolute w-64 h-80 bg-primary/40 rounded-[100px] rotate-6 backdrop-blur-md translate-x-8 translate-y-8 mix-blend-screen"></div>
          <div className="absolute w-64 h-80 bg-gradient-to-tr from-primary to-orange-400 rounded-[100px] rotate-12 shadow-[0_0_50px_rgba(255,87,34,0.3)] z-10"></div>
        </motion.div>

      </div>
    </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <div className="relative max-w-4xl w-full h-[90vh] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 flex flex-col shadow-2xl">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10 bg-black/50">
                <h3 className="font-display text-2xl md:text-3xl text-cream tracking-wide uppercase">MY RESUME</h3>
                <div className="flex items-center gap-2 md:gap-4">
                  <a
                    href="/resume.pdf"
                    download="Sivasuriyan_Raja_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2.5 bg-primary text-black font-body font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg hover:bg-white transition-colors"
                  >
                    <Download size={16} /> <span className="hidden md:inline">Download PDF</span>
                  </a>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-cream"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body (Scrollable PDF) */}
              <div className="flex-1 p-0 flex justify-center items-center bg-black/20 w-full h-full relative">
                <iframe 
                  src="/resume.pdf#view=FitH" 
                  title="Sivasuriyan Raja Resume"
                  className="absolute inset-0 w-full h-full border-none rounded-b-xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Welcome;
