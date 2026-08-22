import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const projects = [
    {
        title: 'FleetFlow',
        subtitle: 'Fleet Management System',
        description:
            'A comprehensive fleet management platform with real-time vehicle tracking, driver profiles, fuel expense tracking, maintenance logging, and analytics dashboard.',
        tech: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Chart.js'],
        github: 'https://github.com/Dhruv3595',
        badge: 'Full Stack',
    },
    {
        title: 'AI Interview Platform',
        subtitle: 'Intelligent Prep Tool',
        description:
            'An AI-powered interview preparation platform with automated question generation, real-time AI feedback, performance analytics, and personalized study plans.',
        tech: ['React.js', 'Python', 'Gemini API', 'PostgreSQL', 'WebSockets'],
        github: 'https://github.com/Dhruv3595',
        badge: 'AI / ML',
    },
    {
        title: 'Locify',
        subtitle: 'Password Manager',
        description:
            'Secure password management application with encrypted AES-256 storage, biometric-ready auth, strength analysis, and category-based organization.',
        tech: ['React.js', 'JavaScript', 'PHP', 'MySQL', 'Crypto API'],
        github: 'https://github.com/Dhruv3595',
        badge: 'Security',
    },
    {
        title: 'TalentGuard',
        subtitle: 'Enterprise HR Intelligence',
        description:
            'Enterprise AI-driven HR analytics platform designed to predict employee attrition. Features real-time KPI monitoring and automated reporting.',
        tech: ['React.js', 'Python', 'FastAPI', 'Scikit-Learn', 'PostgreSQL'],
        github: 'https://github.com/Dhruv3595',
        badge: 'Data Science',
    },
    {
        title: 'AI Education',
        subtitle: 'Personalized Learning Assistant',
        description:
            'Intelligent educational ecosystem providing personalized learning paths, AI-driven content summaries, and interactive knowledge assessments.',
        tech: ['Next.js', 'OpenAI API', 'Node.js', 'MongoDB', 'Framer Motion'],
        github: 'https://github.com/Dhruv3595',
        badge: 'EdTech AI',
    },
    {
        title: 'Vehicle Service Booking System',
        subtitle: 'Booking Management',
        description:
            'Full-stack booking system for vehicle wash services featuring appointment scheduling, admin dashboard, and automated billing.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        github: 'https://github.com/Dhruv3595',
        badge: 'Web App',
    },
];

export default function Projects() {
    const [ref, isInView] = useInView(0.05);

    return (
        <section id="projects" ref={ref} className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                {/* Section Header */}
                <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                        // Featured Works
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                        Curated <span className="gradient-text-luxury">Projects</span>
                    </h2>
                </div>

                {/* Bento Grid Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div key={i} className="bento-card p-6 flex flex-col justify-between group">
                            <div className="space-y-4">
                                {/* Top Badge Row */}
                                <div className="flex justify-between items-center">
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                        {project.badge}
                                    </span>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                                        title="View on GitHub"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-purple-400 font-medium mt-0.5">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="pt-6 mt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                                {project.tech.map((t, j) => (
                                    <span key={j} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
