import { forwardRef } from "react";
import StyledIcon from "../icon/icon.style";
import calendarIcon from '../../assets/icon/calendar-icon.svg'
import { StyledDatepickerInput, StyledInputWrapper } from "./datepicker.style";
interface ExampleCustomInputProps {
    value: string;
    onClick: () => void;
    toggleDatePicker: () => void
}

const DatePickerCustomInput = forwardRef<
    HTMLInputElement,
    ExampleCustomInputProps
>(({ value, onClick, toggleDatePicker }, ref) => (
    <StyledInputWrapper>
        <StyledDatepickerInput
            onClick={onClick}
            ref={ref}
            placeholder="Dates"
            value={value}
        />
        {!value && 
        <StyledIcon src={calendarIcon} width="24" height="24" style={{ position: 'absolute', right: '11px', top: '11px', zIndex: '10' }} onClick={toggleDatePicker} />}
    </StyledInputWrapper>
));

export default DatePickerCustomInput

