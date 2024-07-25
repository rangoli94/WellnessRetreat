import React from 'react'
import CardComponent from './CardComponent'

function DisplayRetreats({ retreats, currPage }) {

    console.log(retreats)

    const filterRetreats = retreats.length > 3 ? retreats.slice((currPage * 3) - 3, currPage * 3) : retreats
    console.log(filterRetreats)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5">
            {retreats.length > 0 &&
                filterRetreats.map(retreat => <CardComponent key={retreat.id} title={retreat.title}
                    description={retreat.description} date={retreat.date}
                    location={retreat.location} price={retreat.price}
                    image={retreat.image} duration={retreat.duration}
                />) 
            }
        </div>
    )
}

export default DisplayRetreats