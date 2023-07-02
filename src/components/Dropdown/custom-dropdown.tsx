import { StyledDropdown } from './custom-dropdown.styles'
import { FormControl, InputLabel, List, MenuItem } from '@mui/material'
import { FC, ReactNode } from 'react';
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
    return (
        <FormControl>
            <InputLabel id="">{label}</InputLabel>
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