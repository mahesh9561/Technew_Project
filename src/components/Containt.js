import React from 'react';

function Containt({ onNavigate, activeIndex }) { // Accept activeIndex as a prop
  const handleClick = (index) => {
    onNavigate(index); // Call the navigation handler
  };

  return (
    <div className="flex items-center justify-start gap-5 bg-white p-4 shadow-md rounded-md h-[100">
      {['Basic Details', 'Contact Details', 'Academic Details', 'Interview Rounds'].map((text, index) => (
        <div
          key={index}
          className={`text-gray-600 cursor-pointer font-semibold pb-2 ${activeIndex === index ? 'text-blue-600' : ''}`}
          onClick={() => handleClick(index)}
        >
          {text}
          {activeIndex === index && <div className="absolute left-0 right-0 bottom-0
           h-1 " />}
        </div>
      ))}
    </div>
  );
}

export default Containt;