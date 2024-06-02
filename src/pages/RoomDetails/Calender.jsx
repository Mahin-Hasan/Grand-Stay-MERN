import { DateRange } from "react-date-range";

const Calender = ({ value, handleDateChange }) => {
    // start date and end date is the VALUE
    console.log(value);
    return (
        <DateRange
            ranges={[value]}
            rangeColors={['#6366f1']}
            direction='vertical'
            showDateDisplay={false}
            onChange={handleDateChange}
        />
    );
};

export default Calender;

// import { DateRange } from 'react-date-range'

// const DatePicker = () => {
//   return (
//     <DateRange
//       rangeColors={['#F43F5E']}
//       ranges={[value]}
//       onChange={handleSelect}
//       date={value.startDate}
//       direction='vertical'
//       showDateDisplay={false}
//       minDate={value.startDate}
//       maxDate={value.endDate}
//     />
//   )
// }

// export default DatePicker