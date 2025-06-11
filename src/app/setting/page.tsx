export default function Setting() {
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-xl font-bold mb-4">설정</h2>
            <div className="bg-white rounded-lg shadow p-6">
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            사이트 제목
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="사이트 제목을 입력하세요"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            이메일 주소
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="이메일 주소를 입력하세요"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        저장하기
                    </button>
                </form>
            </div>
        </div>
    );
}