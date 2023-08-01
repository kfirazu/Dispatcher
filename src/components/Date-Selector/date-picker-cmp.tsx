
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "../../store/hooks.store";
import { updateFilterByDates } from "../../store/news/filter.reducer";
import { newsService } from "../../services/news.service";
import styled from "styled-components";
import "../../index.css"
import DatePickerCustomInput from "./datepicker-custom-input";


interface DatePickerProps {

}

const DatePickerCmp: React.FC<DatePickerProps> = () => {

    const dispatch = useAppDispatch()
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {console.log('isOpen:', isOpen)} , [isOpen])

    useEffect(() => {
        if (endDate) {
            const formattedDates = newsService.formatFilterDates(startDate, endDate)
            console.log('formattedDates:', formattedDates)
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
        <StyledDatePicker
            // onInputClick={toggleDatePicker}
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
            // popperContainer={customPopperContainer}

            // locale="en-US"
            // isClearable
            // inline
            // renderCustomHeader={}
            customInput={<DatePickerCustomInput value={"hello"} onClick={toggleDatePicker} toggleDatePicker={toggleDatePicker} />}

            onClickOutside={onCloseDatePicker}
        />
    )
}

export default DatePickerCmp;

const StyledDatePicker = styled(DatePicker).attrs((props) => ({
    className: props.className
}))`


.react-datepicker {
    background-color: yellow;
    border-radius: 15px;
    width: 20px;
    padding: 0;
    display: inline-block;
  }
`

const customPopperContainer = (popperProps: any) => (
    <div className="react-datepicker" style={{ backgroundColor: "yellow", borderRadius: "15px", width: '20px', padding: '0', display: 'inline-block' }}>
        {popperProps.children}
    </div>
);