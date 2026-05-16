import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
    { Icon: FaInstagram, label: 'Instagram' },
    { Icon: FaFacebook, label: 'Facebook' },
    { Icon: FaXTwitter, label: 'Twitter/X' },
];

export default function Footer() {
    return (
        <footer className="bg-[#2d4a3e] text-white">
            <div className="max-w-6xl mx-auto px-6 py-12 text-center">
                <h2 className="text-4xl font-bold mb-2">
                    <span className="font-light">Keen</span>Keeper
                </h2>
                <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <p className="text-sm font-medium mb-3">Social Links</p>
                <div className="flex justify-center gap-3 mb-10">
                    {socialLinks.map(({ Icon, label }) => (
                        <button key={label} aria-label={label}
                            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Icon size={15} />
                        </button>
                    ))}
                </div>
                <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
                    <span>© 2026 KeenKeeper. All rights reserved.</span>
                    <div className="flex gap-4">
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map(t => (
                            <a key={t} href="#" className="hover:text-white transition-colors">{t}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}