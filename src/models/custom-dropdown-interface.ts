import { SelectProps } from "@mui/material"
import { ReactNode } from "react"

export interface CustomDropdownProps extends SelectProps {
    width?: string
    height?: string
    fontWeight?: string
    label?: ReactNode
    children: any //Fix - should fix type

}