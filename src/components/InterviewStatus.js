import { useState } from 'react';

function InterviewStatus() {
    // const [currentStep, setCurrentStep] = useState(1);

    // const handleNext = () => {
    //     setCurrentStep(currentStep + 1);
    // };

    // const handlePrevious = () => {
    //     setCurrentStep(currentStep - 1);
    // };
    return (
        <div className="flex justify-between items-center w-full h-16 bg-gray-50 px-4 rounded-lg">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-gray-700 font-bold">
                    1
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-orange-500">Interview Round 1</h3>
                    <p className="text-xs text-green-500 font-medium">Completed</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    2
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-gray-700">Interview Round 2</h3>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    3
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-gray-700">Interview Round 3</h3>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    4
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold text-gray-700">HR Round</h3>
                </div>
            </div>
        </div>
    );
}

export default InterviewStatus;