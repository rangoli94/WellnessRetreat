import React from 'react'

function CardComponent() {
    return (
        <div className='w-full bg-lightBrown rounded p-4'>
            <img class="w-full sm:w-24 sm:h-24 md:w-48 md:h-auto rounded  " 
            src="https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""  />
            <div className='font-semibold mt-2'>
            Forest Yoga Retreat
            </div>
            <div className='test-sm mt-2'>
                Join us for rejuvinating yoga in the heart of the forest. Experience tranquility and peace.
            </div>
            <div className='test-sm mt-2'>
                Date: June 10-15, 2024
            </div>
            <div className='test-sm mt-2'>
                Location: Redwood Forest, California
            </div>
            <div className='font-semibold sm:font-normal test-sm mt-2'>
                Price: $1200
            </div>
        </div>
    )
}

export default CardComponent