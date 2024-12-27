import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Containt from './components/Containt';
import { BrowserRouter } from "react-router-dom";
import Basics from './pages/Basics';
import Contact from './pages/Contact';
import Academic from './pages/Academic';
import Interview from './pages/Interview';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState(0); 
  const [activeItem, setActiveItem] = useState('');
  const handleNavigation = (index) => {
    setActiveComponent(index);
  };
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-full">
        {/* Header */}
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className={`bg-gray-200 w-64 p-4 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="sidebar">
              {['Dashboard', 'Job Notification'].map((item) => (
                <li
                  key={item}
                  className={`py-2 px-3 ${activeItem === item ? 'bg-blue-500 rounded-lg items-center text-white' : 'hover:bg-gray-200 hover:text-blue-500'
                    }`}
                  onClick={() => handleItemClick(item)}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4">
            <Containt onNavigate={handleNavigation} activeIndex={activeComponent} /> {/* Pass activeIndex to Containt */}
            {activeComponent === 0 && <Basics />}
            {activeComponent === 1 && <Contact />}
            {activeComponent === 2 && <Academic />}
            {activeComponent === 3 && <Interview />}
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;