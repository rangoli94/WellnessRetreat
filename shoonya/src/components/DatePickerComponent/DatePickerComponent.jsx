import React, { useRef } from 'react';
import { Menu, MenuButton } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

function DatePickerComponent({ selectedDate, handleDateChange }) {

  const dateRef = useRef()

  const clickRef = () => {
    dateRef.current.toggleCalendar()
  }

  return (
    <>
      <DatePicker
        selected={selectedDate}
        ref={dateRef}
        onChange={handleDateChange}
        className='hidden'
        id="datepicker"
        dateFormat="MMMM d, yyyy"
        placeholderText='Filter by Date'
      />
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton
            onClick={clickRef}
            className="inline-flex w-full justify-between gap-x-1.5 rounded-md 
            border border-darkGrey sm:border-lightBlue
            bg-lightGrey text-black sm:bg-darkBlue sm:text-white 
            hover:bg-lightGrey sm:hover:bg-lightBlue 
            ring-darkGrey sm:ring-lightBlue 
            px-3 py-2 text-lg sm:text-sm font-semibold
            shadow-sm ring-1 ring-inset ">

            Filter by Date
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>
      </Menu>
    </>

  );
}

export default DatePickerComponent;
