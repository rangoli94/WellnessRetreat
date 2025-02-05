import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown({ title, handleTypeChange, selectedVal, optionsArray }) {
  return (
    <Menu as="div" className="relative inline-block w-50 text-left ml-0 mt-4 mb-4 sm:ml-4 sm:mt-0 sm:mb-0">
      <div>
        <MenuButton
          className="inline-flex w-full justify-between gap-x-1.5 rounded-md 
            border border-darkGrey sm:border-lightBlue
            bg-lightGrey text-black sm:bg-darkBlue sm:text-white 
            hover:bg-lightGrey sm:hover:bg-lightBlue 
            ring-darkGrey sm:ring-lightBlue 
            px-3 py-2 text-lg sm:text-sm font-semibold
            shadow-sm ring-1 ring-inset ">
          {selectedVal || title}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute 
          left-0 z-10 mt-2 w-56 
          origin-top-right rounded-md 
          bg-white w-full sm:w-auto
          shadow-lg ring-1 ring-black ring-opacity-5 
          transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform 
          data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 
          data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {
            optionsArray?.map((option, id) => (
              <MenuItem key={id}>
                <div
                  onClick={() => handleTypeChange(option.passingParam)}
                  className="block px-4 py-2 sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  {option.tag}
                </div>
              </MenuItem>
            ))
          }
          <MenuItem>
            <div
              onClick={() => handleTypeChange("")}
              className="block px-4 py-2 sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Clear Selection
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
