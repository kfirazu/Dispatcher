
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks.store";
import { updateFilterByDates } from "../../store/news/filter.reducer";
import { FilterOptions, newsService } from "../../services/news.service";
import "../../index.css"
import DatePickerCustomInput from "./datepicker-custom-input";
import { subDays } from "date-fns";


interface DatePickerProps {

}

const DatePickerCmp: React.FC<DatePickerProps> = () => {

    const dispatch = useAppDispatch()
    const articleList = useAppSelector(state => state.news.articleList)
    const filterBy = useAppSelector(state => state.filter.filterBy)
    const searchQuery = useAppSelector(state => state.filter.searchQuery)
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        if (endDate) {
            const formattedDates = newsService.formatFilterDates(startDate, endDate)
            const { formattedStartDate, formattedEndDate } = formattedDates

            dispatch(updateFilterByDates({ from: formattedStartDate, to: formattedEndDate }));
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
            showIcon
            onCalendarOpen={toggleDatePicker}
            calendarClassName="react-datepicker"
            popperClassName="popper"
            popperPlacement="top-start"
            showPopperArrow={false}
            open={isOpen}
            minDate={subDays(new Date(), 30)}
            customInput={<DatePickerCustomInput value={"hello"} onClick={toggleDatePicker} toggleDatePicker={toggleDatePicker} />}

            onClickOutside={onCloseDatePicker}
        />
    )
}

export default DatePickerCmp;
