import React from 'react';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <div>
            {/* Sidebar */}
            <aside
                className={`absolute top-0 left-0 h-full w-64 bg-gray-50 p-4 shadow-lg z-50 transition-transform duration-300 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col items-center gap-4">
                    {/* Dashboard */}
                    <div className="bg-gray-200 p-2 rounded-lg flex items-center">
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
                        <span className="text-gray-700 font-medium ml-2">Dashboard</span>
                    </div>

                    {/* Job Notification */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <span>
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
                        <span className="ml-2">Job Notification</span>
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile view */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}

export default Sidebar;
