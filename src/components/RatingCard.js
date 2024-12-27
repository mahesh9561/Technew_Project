import React from "react";

const RatingCard = ({ name, ratings }) => {
    return (
        <div className="border rounded-lg p-4 mb-4">
            <h3 className="font-bold text-lg mb-2">{name}'s Ratings</h3>
            <div className="grid grid-cols-2 gap-4">
                {Object.keys(ratings).map((category) => (
                    <div key={category} className="flex items-center justify-between">
                        <div className="text-sm">{category}</div>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-4 h-4 rounded-full ${index < ratings[category] ? "bg-yellow-500" : "bg-gray-300"
                                        }`}
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
