import { motion } from 'framer-motion';

const educationData = [
  {
    years: '2021–2024',
    degree: 'Diploma — Computer Science and Engineering',
    institution: 'Government Polytechnic College',
    description: 'Built a strong foundation in computer science, programming, problem solving, and application development during my diploma studies.'
  },
  {
    years: '2024–2027',
    degree: 'B.E. — Computer Science and Engineering',
    institution: 'K. Ramakrishnan College of Engineering',
    description: 'Currently pursuing my Bachelor’s degree with a focus on strengthening my skills in software development, programming, and emerging technologies.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-black relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display uppercase text-5xl md:text-7xl mb-16 text-center"
        >
          EDUCATION
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {educationData.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 shadow-[0_0_15px_#ff5722]"></div>
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full md:w-[45%] bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-primary/50 transition-colors ${index % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'}`}
                >
                  <span className="font-body text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{item.years}</span>
                  <h3 className="font-body text-2xl font-bold mb-2 text-cream">{item.degree}</h3>
                  <h4 className="font-body text-lg text-cream/70 mb-4">{item.institution}</h4>
                  <p className="font-body text-cream/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
