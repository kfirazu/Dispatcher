
import { DatePicker } from '@mui/x-date-pickers'
import type { } from '@mui/x-date-pickers/themeAugmentation'
import { useEffect, useState } from 'react'



const DateSelector = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    useEffect(() => { console.log(selectedDate) }, [selectedDate])
    return (
        <DatePicker
            label={'Dates'}
            onChange={(newValue: Date | null) => { setSelectedDate(newValue) }}
        />

    )
}

export default DateSelector