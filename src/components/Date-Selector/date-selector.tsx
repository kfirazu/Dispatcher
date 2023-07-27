
import { DatePicker } from '@mui/x-date-pickers'
import type { } from '@mui/x-date-pickers/themeAugmentation'
import {  useState } from 'react'
import { styledDatePickerSX } from './date-selector.style'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const DateSelector = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>

            <DatePicker
                label='Dates'
                onChange={(newValue: Date | null) => { setSelectedDate(newValue) }}
                sx={styledDatePickerSX}
                showDaysOutsideCurrentMonth
                slots={{
                    openPickerIcon: CalendarMonthIcon,
                    
                }}
                  
            />
        </LocalizationProvider>
    )
}

export default DateSelector