'use client';
import { FaPhone, FaMessage, FaVideo } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { addEntry } from '@/utils/timeline';

const ACTIONS = [
    { type: 'Call', Icon: FaPhone, emoji: '📞' },
    { type: 'Text', Icon: FaMessage, emoji: '💬' },
    { type: 'Video', Icon: FaVideo, emoji: '🎥' },
];

export default function QuickCheckIn({ friend }) {
    function handleCheckIn(type, emoji) {
        addEntry(type, friend.name);
        toast.success(`${type} with ${friend.name} logged!`, { icon: emoji });
    }

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
                {ACTIONS.map(({ type, Icon, emoji }) => (
                    <button key={type} onClick={() => handleCheckIn(type, emoji)}
                        className="flex flex-col items-center gap-2 p-5 border border-gray-200 rounded-xl hover:bg-gray-50 active:scale-95 transition-all">
                        <Icon size={22} className="text-gray-700" />
                        <span className="text-sm text-gray-700 font-medium">{type}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}