import { FaPlus } from 'react-icons/fa6';

export default function Banner() {
    return (
        <div className="bg-white border-b border-gray-100 py-16 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Friends to keep close in your life
            </h1>
            <p className="text-gray-400 text-sm max-w-sm mx-auto mb-7">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#2d4a3e] hover:bg-[#1e3530] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                <FaPlus size={11} /> Add a Friend
            </button>
        </div>
    );
}