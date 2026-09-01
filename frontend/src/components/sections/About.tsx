import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-black">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-display uppercase text-4xl md:text-7xl mb-8">ABOUT ME</h2>
          
          <div className="font-body text-cream/80 space-y-6 text-lg leading-relaxed">
            <p>
              I'm Sivasuriyan R, a Computer Science and Engineering student with a passion for software development, machine learning, and creative technology.
            </p>
            <p>
              I enjoy transforming ideas into practical applications and solving problems through code. My experience includes working with <span className="font-bold">Python, Machine Learning, Deep Learning, databases, APIs, and web technologies</span>.
            </p>
            <p>
              I've built projects such as AntiMule Bank, BusMate, Pitch Perfect, Object Detection, and management systems, gaining hands-on experience in developing solutions for real-world problems.
            </p>
            <p>
              Beyond development, I'm also interested in digital design and creative editing, which helps me bring both technical and creative thinking into my work.
            </p>
            <p className="text-primary font-bold">
              I'm always learning, building, and looking for new challenges where I can turn ideas into meaningful solutions.
            </p>
          </div>
        </motion.div>

        {/* Right Content: Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-[120px] overflow-hidden border-2 border-primary/30 p-2">
            <div className="w-full h-full rounded-[110px] overflow-hidden">
              <img 
                src="/profile.png" 
                alt="Sivasuriyan R" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full mix-blend-screen blur-2xl opacity-50"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
