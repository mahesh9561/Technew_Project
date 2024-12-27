import React from 'react';

function Header({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <div>
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center w-full">

                <h1 className="text-xl">CVM</h1>
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 rounded-md outline-none border bg-blue-50 w-1/3"
                />

                <button
                    className="md:hidden px-4 py-2 bg-blue-800 rounded-md text-white"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                </button>
            </header>
        </div>
    );
}

export default Header;
