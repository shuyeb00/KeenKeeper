import Link from 'next/link';

export default function FriendNotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
            <p className="text-6xl mb-4">👤</p>
            <h2 className="text-2xl font-bold text-gray-900">Friend Not Found</h2>
            <p className="text-gray-400 mt-2 mb-6">This friend profile doesn't exist.</p>
            <Link href="/"
                className="bg-[#2d4a3e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1e3530] transition-colors">
                Back to Home
            </Link>
        </div>
    );
}