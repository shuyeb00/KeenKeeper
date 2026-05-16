export default function Loading() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-10 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-36 mb-6" />
            <div className="h-10 bg-gray-200 rounded w-44 mb-6" />
            <div className="space-y-1">
                {[...Array(8)].map((_, i) => <div key={i} className="h-16 bg-gray-200 rounded-lg" />)}
            </div>
        </div>
    );
}