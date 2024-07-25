import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import DatePickerComponent from './DatePickerComponent/DatePickerComponent'
import DisplayRetreats from './DisplayRetreats';
import axios from 'axios';
import Loader from './Loader/Loader';
import { useDebounce } from 'use-debounce';

function MainContent() {
  const [allRetreats, setAllRetreats] = useState([])
  const [retreats, setRetreats] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateFilterAdded, setIsDateFilterAdded] = useState(false)
  const [retreatType, setRetreatType] = useState("")
  const [searchTitle, setSearchTitle] = useState("")
  const [searchValue] = useDebounce(searchTitle, 100);
  console.log(currPage)

  const fetchData = async (url, setter) => {
    try {
      setIsLoading(true)
      const response = await axios.get(url)
      setError(null)
      setter([...response?.data])
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    fetchData(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`, setAllRetreats)
    console.log(allRetreats)
  }, [])

  useEffect(() => {
    if (!isDateFilterAdded) {
      fetchData(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currPage}&limit=3&tag=${retreatType}&title=${searchValue}
        `, setRetreats)
    }
  }, [currPage, retreatType, searchValue])


  const handleDateChange = (date) => {
    setSelectedDate(date);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    const filteredRetreat = allRetreats.filter(retreat => {
      let endDate = retreat.date + (retreat.duration * 24 * 60 * 60)
      return (retreat.date <= unixTimestamp && unixTimestamp <= endDate)
    })
    console.log(filteredRetreat)
    setIsDateFilterAdded(true)
    setRetreats([...filteredRetreat])
    setRetreatType("")
    setSearchTitle("")
    setCurrPage(1)
  };

  const handleTypeChange = (type) => {
    setRetreatType(type)
    setCurrPage(1)
    setIsDateFilterAdded(false)
    setSelectedDate(new Date())
  }

  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value)
    setCurrPage(1)
    setIsDateFilterAdded(false)
    setSelectedDate(new Date())
  }

  return (
    <div className='py-5 w-full'>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">

        <div className="flex flex-col sm:flex-row w-full">
          <DatePickerComponent
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
          <Dropdown title={"Filter by Type"} handleTypeChange={handleTypeChange} retreatType={retreatType} />
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
                    disabled={retreats.length < 3}
                    className={`px-4 py-2 font-semibold rounded-lg 
                  ${retreats.length < 3 ?
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