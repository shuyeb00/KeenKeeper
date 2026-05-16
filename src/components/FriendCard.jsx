import Image from 'next/image';
import Link from 'next/link';
import { getStatusBadge, getStatusLabel, getTagColor } from '@/utils/status';

export default function FriendCard({ friend }) {
    const { id, name, picture, days_since_contact, tags, status } = friend;
    return (
        <Link href={`/friends/${id}`}>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <Image src={picture} alt={name} width={64} height={64}
                    className="rounded-full mx-auto mb-2 object-cover w-16 h-16" />
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">{name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{days_since_contact}d ago</p>
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {tags.map(tag => (
                        <span key={tag}
                            className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${getTagColor(tag)}`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className={`mt-2 text-[11px] font-semibold px-3 py-1 rounded-full inline-block ${getStatusBadge(status)}`}>
                    {getStatusLabel(status)}
                </div>
            </div>
        </Link>
    );
}