import React from 'react'
import CardComponent from './CardComponent'
import { PER_PAGE_LIMIT } from '../Constants'

function DisplayRetreats({ retreats, currPage }) {
    const filterRetreats = retreats.length > PER_PAGE_LIMIT ? retreats.slice((currPage * PER_PAGE_LIMIT) - PER_PAGE_LIMIT, currPage * PER_PAGE_LIMIT) : retreats

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