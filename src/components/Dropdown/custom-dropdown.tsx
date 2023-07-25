import { StyledDropdown, StyledMenuItemSX, StyledMenuListSX } from './custom-dropdown.styles'
import { ClickAwayListener, FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react';
import { ArrowDownIcon } from '../Arrow-Down-Icon/arrow-down-icon';
import { CustomDropdownProps } from '../../models/custom-dropdown-interface';
import { useAppSelector } from '../../store/hooks.store';


const CustomDropdown: FC<CustomDropdownProps> = (props) => {

    const { id, name, labelId, items, type, handleChange } = props

    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string>('')



    const toggleDropdown = () => {
        setIsOpen((prevOpen) => !prevOpen)
    }

    const handleClickAway = () => {
        setIsOpen(false)
    }


    // Function to find the corresponding title in the countries array
    const findTitleByValue = (value: string) => {
        const obj = items?.find((item) => item.value === value);
        return obj ? obj.title : value;
    }

    const handleDropdownchange = (ev: SelectChangeEvent<unknown>) => {
        const { value } = ev.target
        const strValue = String(value)
        setSelectedOption(strValue)
        handleChange!(ev)
    }


    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <FormControl style={{ position: 'relative' }}>
                <ArrowDownIcon handleClick={toggleDropdown} />
                <StyledDropdown
                    onClick={toggleDropdown}
                    IconComponent={() => null}
                    id={id}
                    name={name}
                    value={selectedOption}
                    labelId={labelId}
                    open={isOpen ? true : false}
                    onChange={(ev) => handleDropdownchange!(ev)}
                    displayEmpty={true}
                    renderValue={(value: unknown): React.ReactNode =>
                        findTitleByValue(String(value)) ? findTitleByValue(String(value)) : type

                        // (value !== '' ? value as string : type) as React.ReactNode
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
                    {items?.map((child, idx: number) =>
                        <MenuItem
                            sx={StyledMenuItemSX}
                            key={idx}
                            value={child.value}>
                            {child.title}
                        </MenuItem>)}
                </StyledDropdown>
            </FormControl>
        </ClickAwayListener >
    )
}

export default CustomDropdown