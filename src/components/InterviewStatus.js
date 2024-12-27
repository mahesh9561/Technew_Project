function InterviewStatus() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-gray-50 p-4 rounded-lg gap-4 sm:gap-0">
            {/* Interview Round 1 */}
            <div className="w-full sm:w-auto bg-white p-4 rounded-md shadow-md flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-gray-700 font-bold">
                    1
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-orange-500">Interview Round 1</h3>
                    <p className="text-xs text-green-500 font-medium">Completed</p>
                </div>
            </div>

            {/* Interview Round 2 */}
            <div className="w-full sm:w-auto bg-white p-4 rounded-md shadow-md flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    2
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-gray-700">Interview Round 2</h3>
                </div>
            </div>

            {/* Interview Round 3 */}
            <div className="w-full sm:w-auto bg-white p-4 rounded-md shadow-md flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    3
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-gray-700">Interview Round 3</h3>
                </div>
            </div>

            {/* HR Round */}
            <div className="w-full sm:w-auto bg-white p-4 rounded-md shadow-md flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    4
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-gray-700">HR Round</h3>
                </div>
            </div>
        </div>
    );
}

export default InterviewStatus;
