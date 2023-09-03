
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "../../store/hooks.store";
import { updateFilterByDates } from "../../store/news/filter.reducer";
import { newsService } from "../../services/news.service";
import "../../index.css"
import DatePickerCustomInput from "./datepicker-custom-input";
import { addDays, subDays } from "date-fns";
import { TopHeadlines } from "../side-bar/side-bar.types";


interface DatePickerProps {
    disabled: boolean

}

const DatePickerCmp: React.FC<DatePickerProps> = ({ disabled }) => {

    const dispatch = useAppDispatch()
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        if (endDate) {
            // const formattedDates = newsService.formatFilterDates(startDate, endDate)
            // const { formattedStartDate, formattedEndDate } = formattedDates
            // console.log('formatterStartDate:', formattedStartDate)
            // console.log('formattedEndDate:', formattedEndDate)

            dispatch(updateFilterByDates({ from: startDate, to: endDate }));
        }
        setIsOpen(false)
    }, [endDate])

    const handleChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);


    };

    const toggleDatePicker = () => {
        setIsOpen(prevOpen => !prevOpen)
    }

    const clearPickedDatePlaceholder = () => {
        setStartDate(null)
        setEndDate(null)

    }



    const onCloseDatePicker = () => {
        setIsOpen(false)

    }
    return (
        <DatePicker
            selected={null}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText="Date"
            disabled={disabled}
            showIcon
            onCalendarOpen={toggleDatePicker}
            calendarClassName="react-datepicker"
            popperClassName="popper"
            popperPlacement="top-start"
            showPopperArrow={false}
            open={isOpen}
            minDate={subDays(new Date(), 30)}
            maxDate={addDays(new Date(), 0)}
            customInput={<DatePickerCustomInput value={"hello"} onClick={toggleDatePicker} toggleDatePicker={toggleDatePicker} disabled={disabled} />}

            onClickOutside={onCloseDatePicker}
        />
    )
}

export default DatePickerCmp;
