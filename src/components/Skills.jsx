import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const categories = [
    {
        name: 'Frontend',
        icon: '🎨',
        skills: [
            { name: 'React.js', level: 92 },
            { name: 'JavaScript (ES6+)', level: 90 },
            { name: 'HTML5 & CSS3', level: 95 },
            { name: 'Tailwind CSS', level: 88 },
            { name: 'Framer Motion', level: 80 },
            { name: 'Responsive Design', level: 92 },
        ],
    },
    {
        name: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js & Express', level: 82 },
            { name: 'PHP', level: 83 },
            { name: 'RESTful APIs', level: 88 },
            { name: 'MySQL', level: 85 },
            { name: 'PostgreSQL', level: 82 },
            { name: 'JWT Authentication', level: 84 },
        ],
    },
    {
        name: 'Data Science',
        icon: '📊',
        skills: [
            { name: 'Python', level: 85 },
            { name: 'Pandas & NumPy', level: 83 },
            { name: 'Data Visualization', level: 82 },
            { name: 'Machine Learning', level: 74 },
            { name: 'EDA', level: 86 },
            { name: 'Matplotlib & Seaborn', level: 80 },
        ],
    },
    {
        name: 'DevTools',
        icon: '🛠️',
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'VS Code', level: 95 },
            { name: 'Postman', level: 86 },
            { name: 'Vite & Webpack', level: 82 },
            { name: 'Linux / CLI', level: 76 },
            { name: 'CI/CD Basics', level: 70 },
        ],
    },
];

const languages = ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'C++', 'SQL'];

export default function Skills() {
    const [ref, isInView] = useInView(0.1);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="skills" ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb orb-cyan w-[400px] h-[400px] top-20 -left-40 opacity-[0.06]" />
                <div className="orb orb-pink w-[350px] h-[350px] bottom-0 -right-32 opacity-[0.06]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="flex items-center gap-3 mb-3"
                >
                    <div className="h-px w-8 bg-gradient-to-r from-primary-500 to-transparent" />
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-400 font-medium">Expertise</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl md:text-5xl font-black mb-14 leading-tight"
                >
                    Skills & <span className="gradient-text-static">Technologies</span>
                </motion.h2>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-400 flex items-center gap-2 ${activeTab === i
                                    ? 'text-white'
                                    : 'text-white/40 hover:text-white/60 bg-white/[0.02] border border-white/[0.04]'
                                }`}
                        >
                            {activeTab === i && (
                                <motion.div
                                    layoutId="activeSkillTab"
                                    className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-cyan/10 border border-primary-500/20 rounded-xl"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat.icon}</span>
                            <span className="relative z-10">{cat.name}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35 }}
                        className="grid sm:grid-cols-2 gap-x-12 gap-y-5"
                    >
                        {categories[activeTab].skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                                className="group"
                            >
                                <div className="flex justify-between items-center mb-2.5">
                                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{skill.name}</span>
                                    <span className="text-xs font-bold text-primary-400/80">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <motion.div
                                        className="skill-bar-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ delay: 0.3 + i * 0.07, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-10 border-t border-white/[0.04]"
                >
                    <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-5">Programming Languages</h3>
                    <div className="flex flex-wrap gap-3">
                        {languages.map((lang, i) => (
                            <motion.span
                                key={lang}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + i * 0.05 }}
                                whileHover={{ scale: 1.08, y: -3 }}
                                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white/[0.03] border border-white/[0.06] text-white/50 hover:border-primary-500/30 hover:text-white/80 hover:bg-primary-500/5 transition-all duration-300 cursor-default"
                            >
                                {lang}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
