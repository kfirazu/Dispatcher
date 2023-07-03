import { StyledDropdown, StyledInputLabel } from './custom-dropdown.styles'
import { FormControl } from '@mui/material'
import { FC, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledListItem, { StyledList } from '../Dropdown-List-Item/dropdown-list-item.style';
import { ArrowDownIcon } from '../Arrow-Down-Icon/arrow-down-icon';

export interface CustomDrodownProps {
    id: string
    label: ReactNode
    labelId?: string
    // value?:string
    handleChange: () => void
    children: string[]
}
const CustomDropdown: FC<CustomDrodownProps> = (props) => {

    const { id, label, labelId, handleChange, children } = props
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <FormControl style={{ position: 'relative' }}>
            <StyledInputLabel id={labelId}>{label}</StyledInputLabel>
            {/* <ArrowDownIcon /> */}
            <StyledDropdown
                IconComponent={ArrowDownIcon}
                id={id}
                labelId={labelId}
                label={label}
                onChange={handleChange}
            >
                <StyledList >
                    {children.map((child: any) => <StyledListItem key={uuidv4()}>{child}</StyledListItem>)}
                </StyledList>
            </StyledDropdown>
        </FormControl>
    )
}

export default CustomDropdown