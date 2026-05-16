'use client';
import { useEffect, useState } from 'react';
import { getTimeline, setTimeline } from '@/utils/timeline';
import initialTimeline from '@/data/timelineData.json';
import friendsData from '@/data/friends.json';

export default function SummaryCards() {
    const [interactions, setInteractions] = useState(0);

    useEffect(() => {
        let timeline = getTimeline();
        if (timeline.length === 0) {
            setTimeline(initialTimeline);
            timeline = initialTimeline;
        }
        const now = new Date();
        const count = timeline.filter(e => {
            const d = new Date(e.date);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        }).length;
        setInteractions(count);
    }, []);

    const cards = [
        { value: friendsData.length, label: 'Total Friends' },
        { value: friendsData.filter(f => f.status === 'on-track').length, label: 'On Track' },
        { value: friendsData.filter(f => f.status !== 'on-track').length, label: 'Need Attention' },
        { value: interactions, label: 'Interactions This Month' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    <p className="text-xs text-gray-400 mt-1">{label}</p>
                </div>
            ))}
        </div>
    );
}