'use client';
import { useEffect, useState } from 'react';
import { FaPhone, FaMessage, FaVideo } from 'react-icons/fa6';
import { getTimeline, setTimeline } from '@/utils/timeline';
import initialData from '@/data/timelineData.json';

const ICON_MAP = {
    Call: { Icon: FaPhone, bg: 'bg-gray-100' },
    Text: { Icon: FaMessage, bg: 'bg-gray-100' },
    Video: { Icon: FaVideo, bg: 'bg-gray-100' },
};

const FILTERS = ['All', 'Call', 'Text', 'Video'];

function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function TimelinePage() {
    const [entries, setEntries] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        let timeline = getTimeline();
        if (timeline.length === 0) {
            setTimeline(initialData);
            timeline = initialData;
        }
        setEntries(timeline);
    }, []);

    const filtered = filter === 'All' ? entries : entries.filter(e => e.type === filter);

    return (
        <div className="max-w-3xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

            <select value={filter} onChange={e => setFilter(e.target.value)}
                className="border border-gray-200 bg-white rounded-lg px-4 py-2 text-sm text-gray-600 mb-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]">
                {FILTERS.map(f => (
                    <option key={f} value={f}>{f === 'All' ? 'Filter timeline' : f}</option>
                ))}
            </select>

            <div className="space-y-1">
                {filtered.map(entry => {
                    const { Icon, bg } = ICON_MAP[entry.type] || ICON_MAP.Call;
                    return (
                        <div key={entry.id} className="flex items-center gap-4 bg-white px-4 py-3.5 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                                <Icon size={15} className="text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-900">
                                    <span className="font-semibold">{entry.type}</span>
                                    <span className="text-gray-500"> with {entry.friendName}</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{formatDate(entry.date)}</p>
                            </div>
                        </div>
                    );
                })}
                {filtered.length === 0 && (
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-4xl mb-3">📭</p>
                        <p>No {filter !== 'All' ? filter.toLowerCase() : ''} entries yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}