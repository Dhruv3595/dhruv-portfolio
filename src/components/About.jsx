import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const traits = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        label: 'Clean Code',
        desc: 'Writing maintainable, scalable, and well-documented code',
        color: 'from-violet-500 to-purple-600',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
        label: 'Data Driven',
        desc: 'Extracting insights using ML and analytics',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        label: 'Pixel Perfect',
        desc: 'Crafting beautiful, responsive interfaces',
        color: 'from-pink-500 to-rose-500',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        label: 'Fast Learner',
        desc: 'Quickly adapting to new technologies',
        color: 'from-amber-500 to-orange-500',
    },
];

export default function About() {
    const [ref, isInView] = useInView(0.15);

    return (
        <section id="about" ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb orb-purple w-[400px] h-[400px] -top-32 -right-32 opacity-[0.06]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="flex items-center gap-3 mb-3"
                >
                    <div className="h-px w-8 bg-gradient-to-r from-primary-500 to-transparent" />
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-400 font-medium">About</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-black mb-16 leading-tight"
                >
                    Passionate about building <br className="hidden sm:block" />
                    <span className="gradient-text-static">digital experiences</span>
                </motion.h2>

                <div className="grid lg:grid-cols-5 gap-14">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <p className="text-base sm:text-lg text-white/60 leading-[1.8]">
                            I am a <span className="text-white font-semibold">Software Engineer</span> with
                            hands-on industry experience in frontend development, full-stack web applications, and
                            data-driven solutions. My journey began with web design and evolved into building
                            scalable, production-ready applications using modern technologies.
                        </p>
                        <p className="text-base sm:text-lg text-white/60 leading-[1.8]">
                            With expertise in{' '}
                            <span className="text-primary-400 font-medium">React.js, JavaScript, Node.js, Python, and SQL databases</span>,
                            I focus on clean architecture, reusable components, and performance optimization.
                            I transform complex business requirements into intuitive digital experiences.
                        </p>
                        <p className="text-base sm:text-lg text-white/60 leading-[1.8]">
                            Currently working as a{' '}
                            <span className="text-white font-semibold">Data Science Engineer</span> —
                            building applications that are both{' '}
                            <span className="gradient-text-static font-semibold">visually stunning and intelligent</span>.
                        </p>
                    </motion.div>

                    {/* Trait Cards */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                        {traits.map((trait, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5, scale: 1.03 }}
                                className="glass-card p-4 text-center cursor-default group"
                            >
                                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${trait.color} mb-3 transition-shadow group-hover:shadow-lg group-hover:shadow-primary-500/20`}>
                                    {trait.icon}
                                </div>
                                <h3 className="text-xs font-bold text-white mb-1">{trait.label}</h3>
                                <p className="text-[10px] text-white/35 leading-tight">{trait.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
