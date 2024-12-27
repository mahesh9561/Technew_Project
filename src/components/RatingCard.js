import React from "react";

const RatingCard = ({ name, ratings }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-md">
      {/* Card Title */}
      <h3 className="font-bold text-lg mb-4 text-blue-600">{name}'s Ratings</h3>
      
      {/* Ratings Grid */}
      <div className="grid grid-cols-1 gap-6">
        {Object.keys(ratings).map((category) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-center justify-between">
            {/* Category Name */}
            <div className="text-sm font-medium text-gray-700">{category}</div>
            
            {/* Ratings Bar */}
            <div className="flex items-center space-x-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 rounded-full ${index < ratings[category] ? "bg-yellow-500" : "bg-gray-300"}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCard;
