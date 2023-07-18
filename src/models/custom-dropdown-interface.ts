import { SelectProps } from "@mui/material"
import { ReactNode } from "react"

export interface CustomDropdownProps extends SelectProps {
    width?: string
    height?: string
    fontWeight?: string
    label?: ReactNode
    items?: {value: string, name: string}[] //Fix - should fix type 
    name?: string
    type?: string 
    onClick?: () => void
    ref?: any //Fix - fix type
    placeholder?: string


}