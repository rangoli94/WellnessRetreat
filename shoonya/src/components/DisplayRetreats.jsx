import React from 'react'
import CardComponent from './CardComponent'

function DisplayRetreats({retreats}) {
    console.log(retreats)
    return (

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5">
            {retreats.length > 0? 
                retreats.map(retreat => <CardComponent key={retreat.id} title={retreat.title}
                    description={retreat.description} date={retreat.date}
                    location={retreat.location} price={retreat.price}
                    image={retreat.image} duration={retreat.duration}
                 />) :
                 <div>No data to display</div>
            }
        </div>
    )
}

export default DisplayRetreats