import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const contactMethods = [
    {
        name: 'Email',
        value: 'pdhruvn3595@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&to=pdhruvn3595@gmail.com&su=Hello%20Dhruv',
        icon: (
            <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        name: 'Phone',
        value: '+91 7359774363',
        href: 'tel:+917359774363',
        icon: (
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
    },
    {
        name: 'WhatsApp',
        value: '+91 7359774363',
        href: 'https://wa.me/917359774363?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat%21',
        icon: (
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        value: 'dhruv-pandya07',
        href: 'https://www.linkedin.com/in/dhruv-pandya07/',
        icon: (
            <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        value: 'Dhruv3595',
        href: 'https://github.com/Dhruv3595',
        icon: (
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqdlgnq';

export default function Contact() {
    const [ref, isInView] = useInView(0.1);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" ref={ref} className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                {/* Section Header */}
                <div className="space-y-2 text-center max-w-2xl mx-auto">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                        // Let's Connect
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                        Let's Build Something <span className="gradient-text-luxury">Amazing</span>
                    </h2>
                    <p className="text-sm text-slate-400 font-sans">
                        Whether it's a role, project, or collaboration — drop me a message and I'll get back to you.
                    </p>
                </div>

                {/* Main Contact Grid */}
                <div className="grid lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
                    {/* Left Channels Column */}
                    <div className="lg:col-span-2 space-y-3">
                        {contactMethods.map((method, i) => (
                            <a
                                key={i}
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="bento-card p-4 flex items-center gap-4 group hover:border-indigo-500/40 transition-all block"
                            >
                                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                                    {method.icon}
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                                        {method.name}
                                    </div>
                                    <div className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">
                                        {method.value}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:col-span-3 bento-card p-6 sm:p-8">
                        {status === 'success' ? (
                            <div className="py-12 text-center space-y-4">
                                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                                    ✓
                                </div>
                                <h3 className="text-xl font-display font-bold text-white">Message Transmitted!</h3>
                                <p className="text-xs text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn-secondary text-xs mt-4"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs text-slate-400 font-medium mb-1.5">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors font-sans"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs text-slate-400 font-medium mb-1.5">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors font-sans"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-slate-400 font-medium mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project or opportunity..."
                                        className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors font-sans resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-xs text-rose-400">Something went wrong. Please try again or email directly.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="btn-primary w-full text-xs font-semibold !py-3 disabled:opacity-50"
                                >
                                    {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
