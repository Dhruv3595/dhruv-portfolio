import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const projects = [
    {
        title: 'FleetFlow',
        subtitle: 'Fleet Management System',
        description:
            'A comprehensive fleet management platform with real-time vehicle tracking, driver profiles, fuel expense tracking, maintenance logging, and analytics dashboard. Built with full authentication and role-based access control.',
        tech: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Chart.js'],
        github: 'https://github.com/Dhruv3595',
        color: 'from-violet-600 to-indigo-600',
        accent: '#8b5cf6',
        icon: '🚛',
    },
    {
        title: 'AI Interview Platform',
        subtitle: 'Intelligent Prep Tool',
        description:
            'An AI-powered interview preparation platform with automated question generation, real-time AI feedback, performance analytics, and personalized study plans. Features voice input and resume analysis.',
        tech: ['React.js', 'Python', 'Gemini API', 'PostgreSQL', 'WebSockets'],
        github: 'https://github.com/Dhruv3595',
        color: 'from-pink-600 to-rose-600',
        accent: '#ec4899',
        icon: '🤖',
    },
    {
        title: 'Locify',
        subtitle: 'Password Manager',
        description:
            'Secure password management application with encrypted AES-256 storage, biometric-ready auth, password strength analysis, auto-generation, and category-based organization with search.',
        tech: ['React.js', 'JavaScript', 'PHP', 'MySQL', 'Crypto API'],
        github: 'https://github.com/Dhruv3595',
        color: 'from-cyan-600 to-blue-600',
        accent: '#06b6d4',
        icon: '🔐',
    },
    {
        title: 'Vehicle Service Booking System',
        subtitle: 'Booking Management',
        description:
            'Full-stack booking system for vehicle wash services featuring appointment scheduling, admin dashboard with analytics, automated billing, customer management, and service history tracking.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        github: 'https://github.com/Dhruv3595',
        color: 'from-emerald-600 to-teal-600',
        accent: '#10b981',
        icon: '🚗',
    },
];

function ProjectCard({ project, index, isInView }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 + index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            onMouseMove={handleMouseMove}
            className="glass-card p-6 sm:p-8 group relative cursor-default"
            style={{ '--accent': project.accent }}
        >
            {/* Mouse glow spotlight */}
            <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accent}08, transparent 60%)`,
                }}
            />

            {/* Top gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <span className="text-3xl mb-2 block">{project.icon}</span>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-xs text-white/35 mt-0.5">{project.subtitle}</p>
                    </div>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/30 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                        aria-label="View on GitHub"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>

                <p className="text-sm text-white/45 leading-relaxed mb-5">{project.description}</p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                        <span
                            key={j}
                            className="tech-badge px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [ref, isInView] = useInView(0.05);

    return (
        <section id="projects" ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb orb-pink w-[400px] h-[400px] top-1/4 -right-40 opacity-[0.06]" />
                <div className="orb orb-purple w-[300px] h-[300px] bottom-20 -left-20 opacity-[0.06]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="flex items-center gap-3 mb-3"
                >
                    <div className="h-px w-8 bg-gradient-to-r from-primary-500 to-transparent" />
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-400 font-medium">Portfolio</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                >
                    Featured <span className="gradient-text-static">Projects</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 }}
                    className="text-base text-white/35 max-w-2xl mb-14"
                >
                    A selection of projects that showcase my expertise in building full-stack applications,
                    from concept to deployment.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-5">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
