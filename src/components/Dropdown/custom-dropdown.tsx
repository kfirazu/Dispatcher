import { StyledDropdown, StyledMenuItemSX, StyledMenuListSX } from './custom-dropdown.styles'
import { ClickAwayListener, FormControl, MenuItem } from '@mui/material'
import { FC, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ArrowDownIcon } from '../Arrow-Down-Icon/arrow-down-icon';
import { CustomDropdownProps } from '../../models/custom-dropdown-interface';


const CustomDropdown: FC<CustomDropdownProps> = (props) => {

    const { id, labelId, children, placeholder } = props
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string>('')
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleClickAway = () => {
        setIsOpen(false)
    }

    const handleChange = (ev: any) => {  //FIX: fix type
        const selectedItem = ev.target.value
        setSelectedOption(selectedItem)

    }

    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <FormControl style={{ position: 'relative' }}>
                <ArrowDownIcon handleClick={toggleDropdown} />
                <StyledDropdown
                    onClick={toggleDropdown}
                    IconComponent={() => null}
                    id={id}
                    value={selectedOption}
                    labelId={labelId}
                    open={isOpen ? true : false}
                    onChange={handleChange}
                    displayEmpty={true}
                    renderValue={(value: unknown): React.ReactNode =>
                        (value !== '' ? value as string : placeholder) as React.ReactNode
                    }
                    ref={dropdownRef}
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: StyledMenuListSX
                            }
                        }
                    }}

                >
                    {children.map((child: any) => //FIX : fix prop type
                        <MenuItem
                            sx={StyledMenuItemSX}
                            key={uuidv4()}
                            value={child.value}>
                            {child.name}
                        </MenuItem>)}
                </StyledDropdown>
            </FormControl>
        </ClickAwayListener >
    )
}

export default CustomDropdown