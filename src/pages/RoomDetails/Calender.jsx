import { DateRange } from "react-date-range";

const Calender = ({ value, handleSelect }) => {
    // start date and end date is the VALUE
    console.log(value);
    return (
        <DateRange
            rangeColors={['#F43F5E']}
            direction='vertical'
            showDateDisplay={false}
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