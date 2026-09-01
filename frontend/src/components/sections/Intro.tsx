import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section id="intro" className="min-h-[70vh] flex items-center justify-center py-20 px-6 bg-black relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-primary text-2xl md:text-3xl tracking-widest uppercase mb-8"
        >
          INTRODUCTION
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-2xl md:text-4xl leading-relaxed md:leading-relaxed text-cream text-justify"
        >
          I'm a curious developer who enjoys turning challenging problems into <span className="font-bold">practical solutions</span>. My journey revolves around <span className="font-bold">software development, AI, and continuous learning</span>. From building machine learning systems to developing real-world applications, I love exploring how technology can solve everyday problems.
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
