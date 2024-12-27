import React from 'react';

function InterviewRound() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-2">
      <h2 className="text-lg font-bold mb-4 text-blue-500">Interview Round 1</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {/* Feedback Given */}
        <div className="bg-gray-100 w-full sm:w-1/2 rounded-md p-4 flex items-center justify-between">
          <p className="text-blue-500 font-medium">Feedback Given</p>
          <span className="text-orange-500 font-semibold text-5xl">2/2</span>
        </div>

        {/* Feedback Pending */}
        <div className="bg-gray-100 w-full sm:w-1/2 rounded-md p-4 flex items-center justify-between">
          <p className="text-blue-500 font-medium">Feedback Pending</p>
          <span className="text-orange-500 font-semibold text-5xl">0/2</span>
        </div>
      </div>
    </div>
  );
}

export default InterviewRound;
