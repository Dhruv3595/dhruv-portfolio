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
                    if (rect.top <= 150) current = section.id;
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
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled
                    ? 'bg-[#030014]/70 backdrop-blur-2xl border-b border-white/[0.06] py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex items-center"
                    >
                        <div>
                            <p className="text-sm font-bold text-white leading-none">Dhruv Pandya</p>
                            <p className="text-[10px] text-white/40 leading-tight mt-0.5">Software Engineer</p>
                        </div>
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-2 py-1.5">
                        {navLinks.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className="relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-300"
                            >
                                {activeSection === item && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-cyan/10 border border-primary-500/20 rounded-full"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className={`relative z-10 ${activeSection === item ? 'text-white' : 'text-white/50 hover:text-white/80'}`}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </span>
                            </button>
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <a href="mailto:pdhruvn3595@gmail.com" className="hidden md:block glow-btn !text-xs !py-2 !px-5">
                            Let's Talk
                        </a>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06]"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-[5px]">
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 7, width: 20 } : { rotate: 0, y: 0, width: 18 }}
                                    className="block h-[1.5px] bg-white rounded-full origin-center"
                                    style={{ width: 18 }}
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    className="block w-3 h-[1.5px] bg-white rounded-full"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -7, width: 20 } : { rotate: 0, y: 0, width: 14 }}
                                    className="block h-[1.5px] bg-white rounded-full origin-center"
                                    style={{ width: 14 }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Full-screen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-3xl md:hidden flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col items-center gap-4">
                            {navLinks.map((item, i) => (
                                <motion.button
                                    key={item}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    onClick={() => handleNavClick(item)}
                                    className="text-3xl font-bold text-white/60 hover:text-white transition-colors"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </motion.button>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                href="mailto:pdhruvn3595@gmail.com"
                                className="glow-btn mt-6"
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Talk
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
