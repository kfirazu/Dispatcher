import { SelectChangeEvent, SelectProps } from "@mui/material"
import { ReactNode } from "react"

export interface CustomDropdownProps extends SelectProps {
    width?: string
    height?: string
    fontWeight?: string
    label?: ReactNode
    items?: { value: string, title: string }[]
    name?: string
    type?: string
    onClick?: () => void
    ref?: React.RefObject<HTMLSelectElement>
    placeholder?: string
    handleChange?: (ev: SelectChangeEvent<unknown>) => void



}