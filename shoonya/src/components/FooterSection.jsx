import React from 'react'

function FooterSection() {
  return (
    <div
      className='text-xs font-semibold w-full bg-white bottom-0 left-0 right-0 
        text-black py-2 px-2 text-center fixed sm:static'
    >
      &copy; {new Date().getFullYear()} Wellness Retreats. All rights reserved.

    </div>

  )
}

export default FooterSection