import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const experiences = [
    {
        title: 'Data Science Engineer',
        company: 'BrainyBeam Info-Tech Pvt. Ltd.',
        period: 'Jan 2026 – Present',
        location: 'Ahmedabad',
        type: 'Full-time',
        bullets: [
            'Performed exploratory data analysis (EDA) on large datasets to extract actionable business insights',
            'Built and deployed ML models using Python, Pandas, scikit-learn, achieving 92% accuracy in predictions',
            'Created interactive dashboards and visual reports for stakeholders to drive data-informed decisions',
            'Automated data pipelines reducing manual reporting effort by 60%',
        ],
        color: 'from-violet-500 to-purple-600',
        dotColor: 'bg-violet-500',
        glowColor: 'rgba(139,92,246,0.4)',
        icon: '📊',
    },
    {
        title: 'Front-End Developer',
        company: 'Cognifyz Technologies',
        period: 'Oct 2025 – Dec 2025',
        location: 'Hybrid',
        type: 'Full-time',
        bullets: [
            'Developed responsive, production-ready interfaces using React.js and modern CSS frameworks',
            'Built a reusable component library improving development velocity by 40% across the team',
            'Collaborated cross-functionally with backend and design teams, shipping 12+ features on schedule',
            'Implemented performance optimizations reducing load time by 35%',
        ],
        color: 'from-blue-500 to-cyan-500',
        dotColor: 'bg-cyan-500',
        glowColor: 'rgba(6,182,212,0.4)',
        icon: '⚛️',
    },
    {
        title: 'React JS Intern',
        company: 'Creart Solution',
        period: 'Jun 2025 – Sep 2025',
        location: 'Ahmedabad',
        type: 'Internship',
        bullets: [
            'Built robust React components using Hooks, Context API, and state management patterns',
            'Integrated frontend with RESTful APIs ensuring seamless data flow and error handling',
            'Implemented responsive layouts with mobile-first design principles',
        ],
        color: 'from-emerald-500 to-teal-500',
        dotColor: 'bg-emerald-500',
        glowColor: 'rgba(16,185,129,0.4)',
        icon: '🚀',
    },
    {
        title: 'Web Designer Intern',
        company: 'Way To Web Pvt. Ltd.',
        period: 'May 2023 – Aug 2023',
        location: 'Ahmedabad',
        type: 'Internship',
        bullets: [
            'Designed and developed modern UI layouts using HTML, CSS, JavaScript, and PHP',
            'Improved website usability scores and increased user engagement by 25%',
            'Collaborated with senior designers to implement pixel-perfect, responsive designs',
        ],
        color: 'from-orange-500 to-amber-500',
        dotColor: 'bg-orange-500',
        glowColor: 'rgba(249,115,22,0.4)',
        icon: '🎨',
    },
];

export default function Experience() {
    const [ref, isInView] = useInView(0.05);

    return (
        <section id="experience" ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb orb-cyan w-[350px] h-[350px] top-1/3 -left-40 opacity-[0.06]" />
                <div className="orb orb-purple w-[300px] h-[300px] bottom-20 -right-32 opacity-[0.04]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="flex items-center gap-3 mb-3"
                >
                    <div className="h-px w-8 bg-gradient-to-r from-primary-500 to-transparent" />
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-400 font-medium">Career</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                >
                    Professional <span className="gradient-text-static">Journey</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 }}
                    className="text-base text-white/35 max-w-2xl mb-16"
                >
                    My career path through software engineering, frontend development, and data science — building impactful products at every step.
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line - desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
                        <div className="h-full bg-gradient-to-b from-primary-500/40 via-accent-cyan/20 to-transparent" />
                    </div>

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative md:flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Card Side */}
                                    <div className="md:w-[calc(50%-2rem)]">
                                        <div className="glass-card p-6 sm:p-8 group relative overflow-hidden">
                                            {/* Top gradient accent line */}
                                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} rounded-t-3xl`} />

                                            {/* Background glow on hover */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"
                                                style={{ background: `radial-gradient(ellipse at center, ${exp.glowColor.replace('0.4', '0.06')}, transparent 70%)` }}
                                            />

                                            <div className="relative z-10">
                                                {/* Header Row */}
                                                <div className="flex items-start justify-between gap-3 mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-2xl">{exp.icon}</span>
                                                        <div>
                                                            <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                                                            <p className="text-sm text-white/50 font-medium">{exp.company}</p>
                                                        </div>
                                                    </div>
                                                    <span className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${exp.color} text-white shadow-lg`}
                                                        style={{ boxShadow: `0 4px 15px ${exp.glowColor}` }}>
                                                        {exp.type}
                                                    </span>
                                                </div>

                                                {/* Meta */}
                                                <div className="flex flex-wrap items-center gap-4 text-xs text-white/35 mb-5 ml-11">
                                                    <span className="flex items-center gap-1.5">
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                        </svg>
                                                        {exp.period}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                        </svg>
                                                        {exp.location}
                                                    </span>
                                                </div>

                                                {/* Bullets */}
                                                <ul className="space-y-3 ml-11">
                                                    {exp.bullets.map((bullet, j) => (
                                                        <li key={j} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed group/item">
                                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} shrink-0 group-hover/item:scale-150 transition-transform`} />
                                                            <span className="group-hover/item:text-white/70 transition-colors">{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 flex-col items-center z-20">
                                        <div className={`w-5 h-5 rounded-full ${exp.dotColor} border-4 border-[#030014] shadow-lg`}
                                            style={{ boxShadow: `0 0 20px ${exp.glowColor}` }} />
                                        <div className={`w-px h-8 bg-gradient-to-b ${exp.color} opacity-30 mt-1`} />
                                    </div>

                                    {/* Empty Side (for alternating layout) */}
                                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
