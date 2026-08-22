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
        color: 'from-violet-500 to-indigo-500',
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
        color: 'from-purple-500 to-pink-500',
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
        color: 'from-cyan-500 to-blue-500',
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
        color: 'from-amber-500 to-orange-500',
    },
];

export default function Experience() {
    const [ref, isInView] = useInView(0.05);

    return (
        <section id="experience" ref={ref} className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                {/* Section Header */}
                <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                        // Career Track
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                        Professional <span className="gradient-text-luxury">Journey</span>
                    </h2>
                </div>

                {/* Experience Cards Stack */}
                <div className="space-y-6">
                    {experiences.map((exp, i) => (
                        <div key={i} className="bento-card p-6 sm:p-8 space-y-4">
                            {/* Card Header Row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm font-medium text-indigo-400 mt-0.5">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                                        📅 {exp.period}
                                    </span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                                        📍 {exp.location}
                                    </span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>

                            {/* Bullets List */}
                            <ul className="space-y-2.5 pt-2">
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
