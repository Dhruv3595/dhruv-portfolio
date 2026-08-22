import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 600);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <footer className="border-t border-white/[0.08] bg-[#07080c] py-10 font-sans text-xs text-slate-400">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-display font-bold">
                            DP
                        </div>
                        <span>© {new Date().getFullYear()} Dhruv Pandya. All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Dhruv3595"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dhruv-pandya07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:pdhruvn3595@gmail.com"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </footer>

            {/* Back to top floating button */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 left-8 z-50 w-10 h-10 rounded-full bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 flex items-center justify-center backdrop-blur-md shadow-2xl transition-all"
                        aria-label="Scroll to top"
                    >
                        ↑
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
