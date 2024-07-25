import React from 'react'

function CardComponent({title, description, date, location, price, image}) {
    return (
        <div className='w-full bg-lightBrown rounded p-4'>
            <img className="w-full sm:w-60 h-60 object-cover rounded"
            src={image}
            alt={title}  />
            <div className='font-semibold mt-2'>
            {title}
            </div>
            <div className='test-sm mt-2'>
                {description}
            </div>
            <div className='test-sm mt-2'>
                Date: {date}
            </div>
            <div className='test-sm mt-2'>
                Location: {location}
            </div>
            <div className='font-semibold sm:font-normal test-sm mt-2'>
                Price: ${price}
            </div>
        </div>
    )
}

export default CardComponent