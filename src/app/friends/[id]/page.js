import { notFound } from 'next/navigation';
import Image from 'next/image';
import friendsData from '@/data/friends.json';
import { getStatusBadge, getStatusLabel, getTagColor } from '@/utils/status';
import QuickCheckIn from '@/components/QuickCheckIn';
import { FaBell, FaBoxArchive, FaTrash } from 'react-icons/fa6';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const friend = friendsData.find(f => f.id === parseInt(id));
    return { title: friend ? `${friend.name} — KeenKeeper` : 'Not Found' };
}

export default async function FriendDetailPage({ params }) {
    const { id } = await params;
    const friend = friendsData.find(f => f.id === parseInt(id));
    if (!friend) notFound();

    const nextDue = new Date(friend.next_due_date).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
    });

    const statCards = [
        { value: friend.days_since_contact, label: 'Days Since Contact' },
        { value: friend.goal, label: 'Goal (Days)' },
        { value: nextDue, label: 'Next Due' },
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">

                {/* Left Column */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="text-center mb-6">
                        <Image src={friend.picture} alt={friend.name} width={80} height={80}
                            className="rounded-full mx-auto mb-3 object-cover w-20 h-20" />
                        <h2 className="text-xl font-bold text-gray-900">{friend.name}</h2>
                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-1.5 ${getStatusBadge(friend.status)}`}>
                            {getStatusLabel(friend.status)}
                        </span>
                        <div className="flex flex-wrap justify-center gap-1 mt-2">
                            {friend.tags.map(tag => (
                                <span key={tag}
                                    className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${getTagColor(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 italic mt-3 leading-relaxed">"{friend.bio}"</p>
                        <p className="text-xs text-gray-400 mt-1.5">Preferred: email</p>
                    </div>

                    <div className="space-y-2 border-t border-gray-100 pt-4">
                        {[
                            { icon: <FaBell size={13} />, label: 'Snooze 2 Weeks', red: false },
                            { icon: <FaBoxArchive size={13} />, label: 'Archive', red: false },
                            { icon: <FaTrash size={13} />, label: 'Delete', red: true },
                        ].map(({ icon, label, red }) => (
                            <button key={label}
                                className={`w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm transition-colors
                  ${red ? 'text-red-500 hover:bg-red-50' : 'text-gray-600 hover:bg-gray-50'}`}>
                                {icon} {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        {statCards.map(({ value, label }) => (
                            <div key={label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{value}</p>
                                <p className="text-xs text-gray-400 mt-1">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">Relationship Goal</h3>
                            <button className="text-sm border border-gray-200 px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                                Edit
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Connect every <strong className="text-gray-900">{friend.goal} days</strong>
                        </p>
                    </div>

                    <QuickCheckIn friend={friend} />
                </div>
            </div>
        </div>
    );
}