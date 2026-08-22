import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
    const phoneNumber = '917359774363';
    const message = encodeURIComponent('Hi Dhruv, I saw your portfolio and would like to chat!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 right-8 z-[9999]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0b0d14]/90 border border-emerald-500/30 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all shadow-2xl backdrop-blur-xl text-xs font-semibold"
                title="Chat on WhatsApp"
            >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Chat on WhatsApp</span>
            </a>
        </motion.div>
    );
}
