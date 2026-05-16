import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[65vh] flex flex-col items-center justify-center text-center px-6">
            <p className="text-8xl font-black text-gray-100 select-none">404</p>
            <h2 className="text-2xl font-bold text-gray-900 -mt-4">Page Not Found</h2>
            <p className="text-gray-400 mt-2 mb-7 text-sm">
                Looks like this page doesn't exist. Let's get you back.
            </p>
            <Link href="/"
                className="bg-[#2d4a3e] hover:bg-[#1e3530] text-white px-7 py-2.5 rounded-full text-sm font-medium transition-colors">
                Back to Home
            </Link>
        </div>
    );
}