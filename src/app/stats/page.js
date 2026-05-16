'use client';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { getTimeline, setTimeline } from '@/utils/timeline';
import initialData from '@/data/timelineData.json';

const COLORS = ['#7c3aed', '#1a3c2e', '#16a34a'];

export default function StatsPage() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let timeline = getTimeline();
        if (timeline.length === 0) {
            setTimeline(initialData);
            timeline = initialData;
        }
        const counts = { Text: 0, Call: 0, Video: 0 };
        timeline.forEach(e => { if (e.type in counts) counts[e.type]++; });
        setChartData(
            Object.entries(counts)
                .filter(([, v]) => v > 0)
                .map(([name, value]) => ({ name, value }))
        );
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Friendship Analytics</h1>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 mb-2">By Interaction Type</p>
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={320}>
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={90}
                                outerRadius={140}
                                paddingAngle={4}
                                strokeWidth={0}
                            >
                                {chartData.map((_, i) => (
                                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(v, n) => [`${v} interactions`, n]} />
                            <Legend iconType="circle" iconSize={8}
                                formatter={(value) => <span className="text-sm text-gray-600">{value}</span>} />
                        </PieChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="h-64 flex items-center justify-center text-gray-400">
                        <p>No interaction data yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}