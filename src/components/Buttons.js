import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-end p-4 bg-white shadow-md">
      {/* Back Button */}
      <button className="mr-4 px-6 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100">
        Back
      </button>

      {/* Submit Button */}
      <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
        Submit
      </button>
    </div>
  );
};

export default Buttons;
