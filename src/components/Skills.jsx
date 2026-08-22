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
        <section id="skills" ref={ref} className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                {/* Section Header */}
                <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                        // Core Stack
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                        Skills &amp; <span className="gradient-text-luxury">Technologies</span>
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 py-2.5 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-2 ${
                                activeTab === i
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                                    : 'bg-[#121420] border border-white/[0.08] text-slate-400 hover:text-white'
                            }`}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.name}</span>
                        </button>
                    ))}
                </div>

                {/* Active Skills Bento Box */}
                <div className="bento-card p-6 sm:p-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                        {categories[activeTab].skills.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between text-xs font-medium">
                                    <span className="text-slate-200 font-sans">{skill.name}</span>
                                    <span className="text-indigo-400 font-bold">{skill.level}%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-700"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Programming Languages Showcase */}
                    <div className="pt-6 border-t border-white/[0.06] space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Programming Languages:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((lang) => (
                                <span key={lang} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-indigo-500/40 transition-colors">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
