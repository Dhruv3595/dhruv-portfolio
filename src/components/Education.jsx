import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Education() {
    const [ref, isInView] = useInView(0.2);

    return (
        <section id="education" ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="flex items-center gap-3 mb-3"
                >
                    <div className="h-px w-8 bg-gradient-to-r from-primary-500 to-transparent" />
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-400 font-medium">Education</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl md:text-5xl font-black mb-16 leading-tight"
                >
                    Academic <span className="gradient-text-static">Background</span>
                </motion.h2>

                {/* Single Education Card - Enhanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <div className="glass-card p-8 sm:p-10 group relative">
                        {/* Top accent gradient */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 rounded-t-3xl" />

                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            {/* Icon */}
                            <div className="shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">B.E. Computer Science & Engineering</h3>
                                </div>
                                <p className="text-sm text-white/50 font-medium mb-6">Gujarat Technological University (GTU)</p>

                                {/* CGPA Display */}
                                <div className="flex items-end gap-4 mb-6">
                                    <div>
                                        <p className="text-xs text-white/30 uppercase tracking-wider mb-1">CGPA</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black gradient-text-static">9.09</span>
                                            <span className="text-lg text-white/30 font-medium">/ 10</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-px bg-white/[0.06]" />
                                    <div>
                                        <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Percentile</p>
                                        <span className="text-2xl font-bold text-white/70">91%</span>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className="skill-bar">
                                    <div
                                        className="skill-bar-fill"
                                        style={{ width: isInView ? '91%' : '0%', transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                    />
                                </div>

                                {/* Key courses */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {['Data Structures', 'Algorithms', 'Machine Learning', 'Web Development', 'DBMS', 'Software Engineering'].map((course, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-medium rounded-full bg-white/[0.03] border border-white/[0.06] text-white/35">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
