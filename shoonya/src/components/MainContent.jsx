import React, { useRef, useState } from 'react'
import Dropdown from './Dropdown'
import DatePickerComponent from './DatePickerComponent/DatePickerComponent'
import DatePicker from 'react-datepicker';
import DisplayRetreats from './DisplayRetreats';

function
  MainContent() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='py-5 w-full'>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">

        <div className="flex flex-col sm:flex-row w-full">
          <DatePickerComponent title={"Filter by Date"} />
          <Dropdown title={"Filter by Type"} />
        </div>

        <input
          type="text"
          className="w-full sm:w-[30vw] inline-flex justify-center 
          gap-x-1.5 rounded-md border
          border-darkGrey sm:border-lightBlue
          bg-lightGrey text-black sm:bg-darkBlue sm:text-white 
          hover:bg-lightGrey sm:hover:bg-lightBlue 
          px-3 py-2 text-lg sm:text-sm 
          font-semibold shadow-sm placeholder-black sm:placeholder-white"
          placeholder="Search Retreats by Title"
        />
      </div>
      <DisplayRetreats />
      <div className='flex justify-center space-x-4'>
        <button
          className="px-4 py-2 bg-darkBlue text-white font-semibold rounded-lg shadow-md hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-darkBlue text-white font-semibold rounded-lg shadow-md hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Next
        </button>
      </div>
    </div>

  )
}

export default
  MainContent