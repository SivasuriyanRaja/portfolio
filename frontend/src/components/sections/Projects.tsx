import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  sourceUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AntiMule Bank',
    description:
      'An end-to-end machine learning project designed for money-mule detection, featuring automated model training and a FastAPI-based inference engine.',
    technologies: ['Python', 'Machine Learning', 'FastAPI'],
    imageUrl:
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'BusMate',
    description:
      'A smart bus seat-booking system providing real-time seat availability, route visualization and booking functionality.',
    technologies: ['Python', 'SQLite', 'Tkinter'],
    imageUrl:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Pitch Perfect',
    description:
      'A turf-booking platform designed to provide real-time slot availability and secure payment integration for users.',
    technologies: ['Python', 'FastAPI', 'MongoDB'],
    imageUrl:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Object Detection',
    description:
      'Developed object-detection models using CNN and pretrained deep-learning architectures to explore image-based object recognition.',
    technologies: ['Deep Learning', 'CNN', 'Python'],
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Fraud Detection',
    description:
      'A fraud-detection system developed using R programming and machine-learning techniques to identify potentially fraudulent activity.',
    technologies: ['R', 'Machine Learning', 'Data Science'],
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Insurance Management System',
    description:
      'A desktop application for managing clients and insurance policies, built with Python and SQLite.',
    technologies: ['Python', 'SQLite', 'Tkinter'],
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Pharmacy Management System',
    description:
      'A desktop-based management system designed for pharmacy inventory and employee management.',
    technologies: ['Python', 'SQLite', 'Tkinter'],
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Digital Designing Studio',
    description:
      'A creative project-management system using MongoDB for efficient data handling and management.',
    technologies: ['Python', 'MongoDB', 'Design'],
    imageUrl:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=900&auto=format&fit=crop',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
    className="group cursor-default"
  >
    {/* Image */}
    <div className="relative overflow-hidden rounded-[32px] aspect-[4/3] mb-6 bg-white/5 border border-white/5">
      <div className="absolute inset-0 bg-primary/25 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 rounded-[32px]" />
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-6 rounded-[32px]">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="font-body font-bold text-[11px] uppercase tracking-widest bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="font-body text-cream/80 text-sm leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex gap-3 mt-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body font-bold text-xs uppercase tracking-widest bg-white text-black px-4 py-2 rounded-full hover:bg-primary transition-colors"
            >
              <ExternalLink size={14} /> View Project
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body font-bold text-xs uppercase tracking-widest border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <GitBranch size={14} /> Source
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Title row */}
    <div className="px-2">
      <h3 className="font-display uppercase text-3xl text-cream group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.technologies.slice(0, 3).map((t) => (
          <span key={t} className="font-body font-bold text-xs uppercase tracking-widest text-primary/70">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  // Split projects into groups of 2 for section-per-pair layout
  const pairs: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2));
  }

  return (
    <div id="projects">
      {pairs.map((pair, groupIdx) => (
        <section
          key={groupIdx}
          className={`py-24 px-6 md:px-12 relative ${groupIdx % 2 === 0 ? 'bg-black' : 'bg-[#0a0a0a]'}`}
        >
          {/* Section heading only on first group */}
          {groupIdx === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="font-display uppercase text-6xl md:text-8xl text-cream">MY LATEST PROJECT</h2>
              <p className="font-body text-cream/50 mt-4 text-sm tracking-widest uppercase">
                Hover a card to explore
              </p>
            </motion.div>
          )}

          <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
            {pair.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
