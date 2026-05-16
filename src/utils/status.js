export function getStatusBadge(status) {
    const map = {
        overdue: 'bg-red-500 text-white',
        'almost due': 'bg-amber-400 text-white',
        'on-track': 'bg-emerald-500 text-white',
    };
    return map[status] || 'bg-gray-400 text-white';
}

export function getStatusLabel(status) {
    const map = { overdue: 'Overdue', 'almost due': 'Almost Due', 'on-track': 'On Track' };
    return map[status] || status;
}

export function getTagColor(tag) {
    const map = {
        work: 'bg-blue-100 text-blue-700',
        family: 'bg-green-100 text-green-700',
        college: 'bg-violet-100 text-violet-700',
        'close friend': 'bg-pink-100 text-pink-700',
        travel: 'bg-cyan-100 text-cyan-700',
        hobby: 'bg-amber-100 text-amber-700',
        childhood: 'bg-yellow-100 text-yellow-700',
        mentor: 'bg-indigo-100 text-indigo-700',
        neighbor: 'bg-teal-100 text-teal-700',
        gym: 'bg-orange-100 text-orange-700',
        gaming: 'bg-purple-100 text-purple-700',
        'book club': 'bg-rose-100 text-rose-700',
        'family friend': 'bg-emerald-100 text-emerald-700',
    };
    return map[tag.toLowerCase()] || 'bg-gray-100 text-gray-600';
}