const KEY = 'kinkeeper_timeline';

export function getTimeline() {
    if (typeof window === 'undefined') return [];
    const s = localStorage.getItem(KEY);
    return s ? JSON.parse(s) : [];
}

export function setTimeline(entries) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEY, JSON.stringify(entries));
}

export function addEntry(type, friendName) {
    const entries = getTimeline();
    const entry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        type,
        friendName,
    };
    const updated = [entry, ...entries];
    setTimeline(updated);
    return updated;
}