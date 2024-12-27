import React from 'react'

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <div>
            <aside className={`bg-gray-200 w-64 p-4 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-gray-200 p-2 rounded-lg">
                        <span className="text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                        <span className="text-gray-700 font-medium">Dashboard</span>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <span className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </svg>
                        </span>
                        <span className="text-white ml-2">Job Notification</span>
                    </button>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar
