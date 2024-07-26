import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import DisplayRetreats from './DisplayRetreats';
import Loader from './Loader/Loader';
import { useDebounce } from 'use-debounce';
import { RETREAT_TYPE, DATE_RANGE, PER_PAGE_LIMIT } from '../Constants'
import useAxios from '../customHooks/UseAxios.hook'

function MainContent() {
  const [allRetreats, setAllRetreats] = useState([])
  const [retreats, setRetreats] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [isDateFilterAdded, setIsDateFilterAdded] = useState(false)
  const [retreatType, setRetreatType] = useState("")
  const [searchTitle, setSearchTitle] = useState("")
  const [searchValue] = useDebounce(searchTitle, 500);
  const { error, isLoading, fetchData } = useAxios();

  useEffect(() => {
    fetchData(setAllRetreats)
  }, [])

  useEffect(() => {
    if (!isDateFilterAdded) {
      const requestParams = {
        page: currPage,
        limit: PER_PAGE_LIMIT,
        tag: retreatType,
        title: searchValue
      }
      fetchData(setRetreats, requestParams)
    }
  }, [currPage, retreatType, searchValue])


  const handleDateChange = (dateRangeObj) => {
    if (dateRangeObj) {
      const filteredRetreat = allRetreats.filter(retreat => {
        let endDate = retreat.date + (retreat.duration * 24 * 60 * 60)
        return (dateRangeObj.startEPOC <= retreat.date && endDate < dateRangeObj.endEPOC)
      })
      setIsDateFilterAdded(true)
      setRetreats([...filteredRetreat])
      setSelectedDateRange(dateRangeObj.tag)
      setRetreatType("")
      setSearchTitle("")
    } else {
      setIsDateFilterAdded(false)
      setSelectedDateRange("")
    }
    setCurrPage(1)
  };

  const handleTypeChange = (type) => {
    setRetreatType(type)
    setCurrPage(1)
    setIsDateFilterAdded(false)
    setSelectedDateRange("")
  }

  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value)
    setCurrPage(1)
    setIsDateFilterAdded(false)
    setSelectedDateRange("")
  }

  return (
    <div className='py-5 w-full'>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">

        <div className="flex flex-col sm:flex-row w-full">
          <Dropdown
            title={"Filter by Date"}
            handleTypeChange={handleDateChange}
            selectedVal={selectedDateRange}
            optionsArray={DATE_RANGE}
          />
          <Dropdown
            title={"Filter by Type"}
            handleTypeChange={handleTypeChange}
            selectedVal={retreatType}
            optionsArray={RETREAT_TYPE}
          />

        </div>

        <input
          type="text"
          value={searchTitle}
          onChange={(e) => handleTitleChange(e)}
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
      {
        isLoading ? <Loader /> :
          error ?
            <div className='flex justify-center'>
              <div
                className="text-red-600 bg-red-100 border border-red-400 rounded p-2 mt-10 text-center
                  inline-block"
              >
                {error}
              </div>
            </div>

            :
            retreats.length > 0 ?
              <>
                <DisplayRetreats retreats={retreats} currPage={currPage} />
                <div className='flex justify-center space-x-4'>
                  <button
                    onClick={() => setCurrPage(prev => prev - 1)}
                    disabled={currPage === 1}
                    className={`px-4 py-2 font-semibold rounded-lg 
                      ${currPage === 1 ?
                        "bg-gray-400 text-gray-600 cursor-not-allowed opacity-50 border border-gray-500 shadow-none" :
                        "bg-darkBlue text-white hover:bg-lightBlue shadow-md"
                      }
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrPage(prev => prev + 1)}
                    disabled={retreats.length < PER_PAGE_LIMIT}
                    className={`px-4 py-2 font-semibold rounded-lg 
                      ${retreats.length < PER_PAGE_LIMIT || (retreats.length > PER_PAGE_LIMIT && currPage === Math.ceil(retreats.length / PER_PAGE_LIMIT)) ?
                        "bg-gray-400 text-gray-600 cursor-not-allowed opacity-50 border border-gray-500 shadow-none" :
                        "bg-darkBlue text-white hover:bg-lightBlue shadow-md"
                      }
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
                  >
                    Next
                  </button>
                </div>
              </> :
              <div className='flex justify-center'>
                <div
                  className="text-blue-600 bg-blue-100 border border-blue-400 rounded p-2 my-10 text-center
                    inline-block"
                >
                  No data to display
                </div>
              </div>
      }
    </div>

  )
}

export default MainContent