import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'C', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'SQL']
  },
  {
    title: 'Machine Learning and AI',
    skills: ['Machine Learning', 'Deep Learning', 'CNN', 'Scikit-learn']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQLite', 'MongoDB']
  },
  {
    title: 'Development',
    skills: ['FastAPI', 'Tkinter', 'Application Development', 'API Development']
  },
  {
    title: 'Problem Solving',
    skills: ['Problem Solving', 'Debugging', 'Logical Thinking']
  },
  {
    title: 'Creative Skills',
    skills: ['Digital Design', 'Creative Editing', 'Graphic Design']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-12 gap-12">
        
        {/* Left Column: Skills List */}
        <div className="md:col-span-7 lg:col-span-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display uppercase text-5xl md:text-7xl mb-16 text-cream"
          >
            SKILLS
          </motion.h2>

          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-display uppercase text-primary text-2xl tracking-widest mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 border border-white/10 rounded-full font-body font-bold text-sm uppercase tracking-wider text-cream/80 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Decorative Visual */}
        <div className="md:col-span-5 lg:col-span-4 flex justify-center items-start md:sticky md:top-24 h-fit">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Target-style decorative element matching Canva visual */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border-2 border-primary/40 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-12 rounded-full border-4 border-primary/60 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-20 rounded-full bg-primary/20 backdrop-blur-md border-2 border-primary flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary shadow-[0_0_20px_#ff5722]"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
