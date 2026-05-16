export default function Loading() {
    return (
        <div className="max-w-6xl mx-auto px-6 animate-pulse">
            <div className="py-16 space-y-4 text-center">
                <div className="h-8 bg-gray-200 rounded-full w-80 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-56 mx-auto" />
                <div className="h-9 bg-gray-200 rounded-full w-36 mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[...Array(4)].map((_, i) => <div key={i} className="bg-gray-200 rounded-xl h-24" />)}
            </div>
            <div className="h-7 bg-gray-200 rounded w-36 mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-12">
                {[...Array(8)].map((_, i) => <div key={i} className="bg-gray-200 rounded-xl h-52" />)}
            </div>
        </div>
    );
}