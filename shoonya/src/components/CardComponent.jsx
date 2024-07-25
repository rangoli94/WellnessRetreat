import React from 'react'
import { format, addDays, isSameYear } from 'date-fns';

function CardComponent({ title, description, date, location, price, image, duration }) {
  const formatDateRange = (startDate, duration) => {
    const endDate = addDays(startDate, duration);

    const startMonthDay = format(startDate, 'MMMM d');
    const endMonthDay = format(endDate, 'd');
    const endYear = format(endDate, 'yyyy');

    const isDifferentYear = !isSameYear(startDate, endDate);
    const isDifferentMonth = format(startDate, 'MMMM yyyy') !== format(endDate, 'MMMM yyyy');

    let formattedDateRange;

    if (isDifferentYear) {
      if (isDifferentMonth) {
        formattedDateRange = `${startMonthDay}-${format(endDate, 'MMMM d, yyyy')}`;
      } else {
        formattedDateRange = `${startMonthDay}-${format(endDate, 'MMMM d, yyyy')}`;
      }
    } else if (isDifferentMonth) {
      formattedDateRange = `${startMonthDay}-${format(endDate, 'MMMM d')}, ${endYear}`;
    } else {
      formattedDateRange = `${startMonthDay}-${endMonthDay}, ${endYear}`;
    }

    return formattedDateRange;
  };

  const startDate = new Date(date * 1000);
  const formattedDateRange = formatDateRange(startDate, duration)

  return (
    <div className='w-full bg-lightBrown rounded p-4'>
      <img className="w-full sm:w-60 h-60 object-cover rounded"
        src={image}
        alt={title} />
      <div className='font-semibold mt-2'>
        {title}
      </div>
      <div className='test-sm mt-2'>
        {description}
      </div>
      <div className='test-sm mt-2'>
        Date: {formattedDateRange}
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