import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['about', 'experience', 'projects', 'education', 'skills', 'contact'];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
            const sections = navLinks.map((id) => document.getElementById(id));
            let current = '';
            for (const section of sections) {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 180) current = section.id;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        setIsOpen(false);
        document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#08090d]/80 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl shadow-indigo-950/20'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Brand Logo */}
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-display font-black text-white text-base shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            DP
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-white text-base leading-tight tracking-tight">
                                Dhruv Pandya<span className="text-indigo-400">.</span>
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium tracking-wide">Software Engineer</span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1 bg-[#121420]/80 border border-white/[0.08] backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
                        {navLinks.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 capitalize ${
                                    activeSection === item
                                        ? 'text-white'
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                {activeSection === item && (
                                    <motion.div
                                        layoutId="activeNavPill"
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item}</span>
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=pdhruvn3595@gmail.com&su=Hello%20Dhruv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex btn-primary text-xs !py-2 !px-5"
                        >
                            Let's Talk
                        </a>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2.5 rounded-xl bg-[#121420] border border-white/[0.08] text-slate-300"
                            aria-label="Toggle Menu"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#08090d]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center items-center p-6"
                    >
                        <div className="w-full max-w-sm bento-card p-6 text-center space-y-4">
                            {navLinks.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className="block w-full py-3 text-lg font-display font-semibold text-slate-200 hover:text-indigo-400 capitalize border-b border-white/[0.05] last:border-none"
                                >
                                    {item}
                                </button>
                            ))}
                            <a
                                href="mailto:pdhruvn3595@gmail.com"
                                className="btn-primary w-full text-sm mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
