import React from 'react'
import CardComponent from './CardComponent'

function DisplayRetreats() {
    return (

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5">
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </div>
    )
}

export default DisplayRetreats