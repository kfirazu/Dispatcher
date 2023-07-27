import React, { FC, useRef, useState } from "react"
import { CustomDropdownProps } from "../../models/custom-dropdown-interface"
import { ClickAwayListener, FormControl, MenuItem, SelectChangeEvent } from "@mui/material"
import { menuItemSX, StyledInputDropdown, StyledInputLabel } from "./search-input-dropdown.style"
import { ArrowDownIcon } from "../Arrow-Down-Icon/arrow-down-icon"



const SearchInputDropdown: FC<CustomDropdownProps> = (props) => {

    const { id, label, labelId, items, placeholder, handleDropdownChange, name } = props
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef(null);


    const onHandleDropdownchange = (ev: SelectChangeEvent<unknown>) => {
        const { value } = ev.target
        const strValue = String(value)
        setSelectedOption(strValue)
        handleDropdownChange!(ev)
    }

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleClickAway = () => {
        setIsOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <FormControl style={{ position: 'relative' }}>
                <StyledInputLabel id={labelId}>{label}</StyledInputLabel>

                <ArrowDownIcon top={"19"} handleClick={toggleDropdown} />
                <StyledInputDropdown
                    onClick={toggleDropdown}
                    IconComponent={() => null}
                    id={id}
                    name={name}
                    value={selectedOption}
                    labelId={labelId}
                    open={isOpen ? true : false}
                    onChange={onHandleDropdownchange}
                    // defaultValue={items![1]}
                    displayEmpty={true}
                    renderValue={(value: unknown): React.ReactNode =>
                        (value !== '' ? String(value) : placeholder) as React.ReactNode
                    }
                    ref={dropdownRef}

                >
                    {items?.map((child, idx: number) => (
                        <MenuItem
                            sx={menuItemSX}
                            key={idx}
                            value={child.value}

                        >
                            {child.title}
                        </MenuItem>
                    ))}
                </StyledInputDropdown>
            </FormControl>
        </ClickAwayListener>
    )
}

export default SearchInputDropdown