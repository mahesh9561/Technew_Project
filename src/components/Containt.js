import React from 'react';

function Containt({ onNavigate, activeIndex }) { // Accept activeIndex as a prop
  const handleClick = (index) => {
    onNavigate(index); // Call the navigation handler
  };

  return (
    <div className="flex items-center justify-start gap-10 bg-white p-4 shadow-md rounded-md">
      {['Basic Details', 'Contact Details', 'Academic Details', 'Interview Rounds & Ratings'].map((text, index) => (
        <div
          key={index}
          className={`text-gray-600 cursor-pointer relative font-semibold pb-2 ${activeIndex === index ? 'text-blue-600' : ''}`}
          onClick={() => handleClick(index)}
        >
          {text}
          {activeIndex === index && <div className="absolute left-0 right-0 bottom-0
           h-1 bg-blue-600" />}
        </div>
      ))}
    </div>
  );
}

export default Containt;