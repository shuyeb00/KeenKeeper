export default function Loading() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-10 animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
                <div className="bg-gray-200 rounded-xl h-96" />
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        {[...Array(3)].map((_, i) => <div key={i} className="bg-gray-200 rounded-xl h-28" />)}
                    </div>
                    <div className="bg-gray-200 rounded-xl h-24" />
                    <div className="bg-gray-200 rounded-xl h-36" />
                </div>
            </div>
        </div>
    );
}