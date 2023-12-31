import { forwardRef } from "react";
import StyledIcon from "../icon/icon.style";
import calendarIcon from '../../assets/icon/calendar-icon.svg'
import { StyledDatepickerInput, StyledInputWrapper } from "./datepicker.style";
interface ExampleCustomInputProps {
    value: string;
    onClick: () => void;
    toggleDatePicker: () => void
    disabled: boolean
}

const DatePickerCustomInput = forwardRef<
    HTMLInputElement,
    ExampleCustomInputProps
>(({ value, onClick, toggleDatePicker, disabled }, ref) => (
    <StyledInputWrapper>
        <StyledDatepickerInput
            onClick={onClick}
            ref={ref}
            placeholder="Dates"
            value={value}
            disabled={disabled}
        />
        {!value &&
            <StyledIcon
                src={calendarIcon}
                width="24"
                height="24"
                style={{ position: 'absolute', right: '11px', top: '11px', zIndex: '10' }}
                onClick={toggleDatePicker}
                disabled={disabled}

            />}
    </StyledInputWrapper>
));

export default DatePickerCustomInput

