'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHouse, FaClock, FaChartLine } from 'react-icons/fa6';

const links = [
    { href: '/', label: 'Home', icon: <FaHouse size={13} /> },
    { href: '/timeline', label: 'Timeline', icon: <FaClock size={13} /> },
    { href: '/stats', label: 'Stats', icon: <FaChartLine size={13} /> },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
                    <span className="font-light">Keen</span>Keeper
                </Link>
                <div className="flex items-center gap-1">
                    {links.map(({ href, label, icon }) => {
                        const active = pathname === href;
                        return (
                            <Link key={href} href={href}
                                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all
                  ${active ? 'bg-[#2d4a3e] text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}>
                                {icon}
                                <span className="hidden sm:inline">{label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}