import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Machine Learning Intern',
    duration: '1 month',
    description: 'Gained hands-on experience in data preprocessing, machine learning model training, and model evaluation. Worked with practical ML workflows and explored how machine learning can be applied to real-world problems.'
  },
  {
    role: 'Junior Designer Intern',
    duration: '3 months',
    description: 'Worked on creative design tasks, client-based projects, and creative evaluations. Developed practical experience in digital design while working on real project requirements.'
  },
  {
    role: 'Intern — BSNL',
    duration: '25 days',
    description: 'Gained practical exposure to communication and networking systems, developing an understanding of how communication technologies work in real-world environments.'
  },
  {
    role: 'IoT Workshop',
    duration: '7 days',
    description: 'Gained hands-on experience with sensors and IoT-based applications, exploring the fundamentals of connecting physical devices with technology.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display uppercase text-5xl md:text-7xl mb-16 text-center text-cream"
        >
          WORK EXPERIENCE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-white/10 p-8 rounded-3xl hover:border-primary/50 group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-body text-2xl font-bold text-cream/90 group-hover:text-primary transition-colors pr-4">{item.role}</h3>
                  <span className="font-body text-primary font-bold text-sm tracking-widest whitespace-nowrap bg-primary/10 px-3 py-1 rounded-full">{item.duration}</span>
                </div>
                <p className="font-body text-cream/60 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
