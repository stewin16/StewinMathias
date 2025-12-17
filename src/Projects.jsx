import React, { useContext } from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { CursorContext } from './CursorContext';

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A high-performance digital storefront built with modern technologies, featuring real-time inventory management and secure payment processing.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    links: { github: "https://github.com/stewin16", live: "#" }
  },
  {
    title: "Analytics Dashboard",
    desc: "Interactive data visualization suite allowing users to track metrics in real-time with smooth D3.js transitions and responsive layouts.",
    tech: ["Next.js", "D3.js", "Tailwind"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    links: { github: "https://github.com/stewin16", live: "#" }
  },
  {
    title: "AI Content Generator",
    desc: "A smart content creation tool leveraging AI APIs to help users generate marketing copy and blog posts efficiently.",
    tech: ["React", "Redux", "Stripe"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    links: { github: "https://github.com/stewin16", live: "#" }
  }
];

const Projects = () => {
  const { textEnter, textLeave } = useContext(CursorContext);

  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" style={{ padding: '8rem 0' }}>
      <div className="container">
        <Reveal><h2 className="section-title">Selected Works</h2></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', perspective: '2000px' }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -25% 0px" }}
            variants={{
              hidden: { opacity: 0, y: 100, rotateY: 90 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                rotateY: 0,
                transition: { delay: i * 0.2, duration: 1, type: "spring", bounce: 0.5 }
              })
            }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="glass-card" 
            onMouseEnter={textEnter} onMouseLeave={textLeave} onMouseMove={handleMouseMove}>
              <img src={p.img} alt={p.title} className="card-img" />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href={p.links.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Github size={18} /> Code</a>
                <a href={p.links.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ExternalLink size={18} /> Live</a>
              </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;