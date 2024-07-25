import React from 'react'

function BodyHeader() {
    return (
        <div className='px-6 py-5 bg-lightBrown rounded shadow hidden md:block'>
            <img
                className="w-[100vw] h-[40vh] object-cover rounded"
                src='https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt="Yoga" />
            <div className='font-semibold text-xl mt-4'>
                Discover Your Inner Peace
            </div>
            <div>
                Join us for a series of wellness retreats designed to help you find tranquility and rejuvination.
            </div>
        </div>
    )
}

export default BodyHeader