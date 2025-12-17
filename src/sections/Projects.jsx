import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: 'Project One',
    description: 'A brief description of the first project, what it does, and why it is cool. It solves a real-world problem.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/stewin16',
    liveLink: 'https://github.com/stewin16',
  },
  {
    title: 'Project Two',
    description: 'This is the second project. It showcases another set of skills and technologies, focusing on front-end development.',
    technologies: ['Vue', 'Firebase', 'CSS Grid'],
    githubLink: 'https://github.com/stewin16',
    liveLink: 'https://github.com/stewin16',
  },
    {
    title: 'Project Three',
    description: 'A full-stack application with a focus on performance and scalability. This project was a great learning experience.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    githubLink: 'https://github.com/stewin16',
    liveLink: 'https://github.com/stewin16',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Projects = ({ id }) => {
  return (
    <section id={id} className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
