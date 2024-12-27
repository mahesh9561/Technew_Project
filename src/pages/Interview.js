import React from 'react'
import InterviewStatus from '../components/InterviewStatus'
import InterviewRound from '../components/InterviewRound'
import DataP from '../components/DataP'
import Buttons from '../components/Buttons'

function Interview() {
    return (
        <div className=' mt-2 p-2 shadow-md border rounded-md h-[100%]'>
            {/* <h1>Interview</h1> */}
            <InterviewStatus />
            <InterviewRound />
            {/* <RatingCard/> */}
            <DataP />
            <Buttons />
        </div>
    )
}

export default Interview
