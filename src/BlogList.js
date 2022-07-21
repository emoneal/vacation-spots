import React from 'react'
import vacationSpots from './data'

export default function BlogList() {

    const mapSpots = vacationSpots.map(item => {
        return (
            <div className="bloglist--spots">   
                <h2>{item.place}</h2>
                <h4 className="bloglist--timetogo">Time to go: {item.timeToGo}</h4>
                <p className="bloglist--price">Price: <em>${item.price}</em></p>
            </div>
        )
    })

    return (
        <>
        <div className="bloglist--container">   
            {mapSpots}
         </div>
        </>
    )
}