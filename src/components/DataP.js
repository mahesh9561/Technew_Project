import React from "react";
import RatingCard from "./RatingCard";

const DataP = () => {
  const overallRatings = {
    "Skills and Qualifications": 2,
    "Cultural Fit": 2,
    "Problem-solving and Critical Thinking": 2,
    "Communication and Interpersonal Skills": 2,
  };

  const categoriesWiseRatings = [
    {
      name: "Smit Panchal",
      ratings: {
        "Skills and Qualifications": 2,
        "Cultural Fit": 2,
        "Problem-solving and Critical Thinking": 2,
        "Communication and Interpersonal Skills": 2,
      },
    },
    {
      name: "Devarsh Patel",
      ratings: {
        "Skills and Qualifications": 2,
        "Cultural Fit": 2,
        "Problem-solving and Critical Thinking": 2,
        "Communication and Interpersonal Skills": 2,
      },
    },
  ];

  return (
    <div className="p-4 shadow-xl rounded-md mt-2 bg-white">
      {/* Overall Ratings */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Overall Ratings</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 mb-4">
          <span className="text-4xl font-bold">2/5</span>
          <span className="text-gray-500 text-lg sm:text-base">Poor+</span>
        </div>
        <div className="space-y-6">
          {Object.keys(overallRatings).map((category) => (
            <div
              key={category}
              className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4"
            >
              <span className="w-full sm:w-1/3 text-gray-700">{category}</span>
              <div className="w-full sm:flex-1 bg-gray-200 h-2 rounded-full mt-2 sm:mt-0">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${overallRatings[category] * 20}%` }}
                ></div>
              </div>
              <span className="mt-2 sm:mt-0 text-gray-700">{overallRatings[category]}/5</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Wise Ratings */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-blue-500">Categories Wise Ratings</h2>
        <div className="space-y-6">
          {categoriesWiseRatings.map((category, index) => (
            <RatingCard
              key={index}
              name={category.name}
              ratings={category.ratings}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataP;
