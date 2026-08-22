import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Education() {
    const [ref, isInView] = useInView(0.2);

    return (
        <section id="education" ref={ref} className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                {/* Section Header */}
                <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                        // Credentials
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                        Academic <span className="gradient-text-luxury">Background</span>
                    </h2>
                </div>

                {/* Main Bento Education Card */}
                <div className="bento-card p-8 sm:p-10 max-w-4xl space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/[0.06] pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl text-white shadow-lg shadow-indigo-500/20 shrink-0">
                                🎓
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                                    B.E. Computer Science & Engineering
                                </h3>
                                <p className="text-sm font-medium text-slate-400 mt-0.5">
                                    Gujarat Technological University (GTU)
                                </p>
                            </div>
                        </div>

                        <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-baseline gap-2 shrink-0">
                            <span className="text-xs text-slate-400 font-medium">CGPA:</span>
                            <span className="text-2xl font-display font-black text-indigo-400">9.22</span>
                            <span className="text-xs text-slate-500">/ 10.0</span>
                        </div>
                    </div>

                    {/* Progress Bar & Percentile Stats */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs font-medium">
                            <span className="text-slate-400">Academic Percentile:</span>
                            <span className="text-cyan-400 font-bold">92.2%</span>
                        </div>

                        <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                            <div
                                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-1000"
                                style={{ width: isInView ? '92.2%' : '0%' }}
                            />
                        </div>
                    </div>

                    {/* Core Modules List */}
                    <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Core Curriculum & Modules:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {['Data Structures', 'Algorithms', 'Machine Learning', 'Web Development', 'DBMS', 'Software Engineering'].map((course, i) => (
                                <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
