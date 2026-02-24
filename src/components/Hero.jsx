import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const roles = [
    'Full Stack Websites',
    'AI-Powered Solutions',
    'Data-Driven Applications',
    'Beautiful User Interfaces',
    'Intelligent Systems',
];

/* ====== Particle System ====== */
function ParticleField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const handleMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        window.addEventListener('mousemove', handleMouse);

        const count = Math.min(80, Math.floor(window.innerWidth / 15));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
                color: Math.random() > 0.5 ? '106, 0, 255' : '0, 240, 255',
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    p.x += (dx / dist) * force * 2;
                    p.y += (dy / dist) * force * 2;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                    if (d < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(106, 0, 255, ${0.06 * (1 - d / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return <canvas ref={canvasRef} className="particles-canvas" />;
}

/* ====== Animated Counter ====== */
function AnimatedCounter({ target, suffix = '', decimals = 0 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !counted.current) {
                    counted.current = true;
                    const num = parseFloat(target);
                    const duration = 2000;
                    const steps = 60;
                    const increment = num / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= num) {
                            current = num;
                            clearInterval(timer);
                        }
                        setCount(decimals > 0 ? current.toFixed(decimals) : Math.floor(current));
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.unobserve(el);
    }, [target, decimals]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;
        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(() => {
                setText(
                    isDeleting
                        ? currentRole.substring(0, text.length - 1)
                        : currentRole.substring(0, text.length + 1)
                );
            }, isDeleting ? 35 : 70);
        }
        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            <ParticleField />
            <div className="aurora-bg" />

            {/* Floating orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div animate={{ y: [0, -30, 0], x: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="orb orb-purple w-[600px] h-[600px] -top-48 -left-48" />
                <motion.div animate={{ y: [0, 20, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="orb orb-cyan w-[500px] h-[500px] top-1/4 -right-40" />
                <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }} className="orb orb-pink w-[400px] h-[400px] -bottom-32 left-1/4" />
                <motion.div animate={{ y: [0, 20, 0], x: [0, -10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="orb orb-gold w-[300px] h-[300px] top-16 right-1/4 opacity-[0.06]" />
            </div>

            <div className="absolute inset-0 grid-pattern" />

            <div className="relative z-10 max-w-5xl">
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] mb-6 tracking-tight"
                >
                    <span className="text-white/90">Hi, I'm </span>
                    <br className="sm:hidden" />
                    <span className="gradient-text">Dhruv Pandya</span>
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center gap-1 text-xl sm:text-2xl md:text-3xl mb-10 h-10"
                >
                    <span className="text-white/40 mr-1">I build </span>
                    <span className="text-white/80 font-medium">{text}</span>
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-primary-400 font-light text-3xl ml-0.5">|</motion.span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-base sm:text-lg text-white/30 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Software Engineer crafting beautiful, performant web applications and
                    data-driven solutions with modern tech stacks.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <a href="#projects" className="glow-btn flex items-center gap-2.5 group">
                        <span>View My Work</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a href="#contact" className="outline-btn flex items-center gap-2.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Get In Touch</span>
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl mx-auto"
                >
                    {[
                        { target: '2', suffix: '+', label: 'Years Exp.' },
                        { target: '5', suffix: '+', label: 'Projects' },
                        { target: '4', suffix: '', label: 'Companies' },
                        { target: '9.09', suffix: '', label: 'CGPA', decimals: 2 },
                    ].map((stat, i) => (
                        <motion.div key={i} whileHover={{ y: -5 }} className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm">
                            <div className="text-2xl sm:text-3xl font-black gradient-text-static">
                                <AnimatedCounter target={stat.target} suffix={stat.suffix} decimals={stat.decimals || 0} />
                            </div>
                            <div className="text-xs text-white/30 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-2">
                    <div className="w-[22px] h-[36px] rounded-full border-2 border-white/10 flex justify-center pt-2">
                        <motion.div animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="w-1 h-1.5 bg-white/40 rounded-full" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
