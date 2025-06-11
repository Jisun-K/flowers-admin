export default function Loading() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">상품 관리</h2>
            <div className="bg-white rounded-lg shadow p-6 mb-4 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 mb-4 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
        </div>
    );
}