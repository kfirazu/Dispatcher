import React, { FC, useRef, useState } from "react"
import { CustomDropdownProps } from "../../models/custom-dropdown-interface"
import { ClickAwayListener, FormControl, MenuItem, SelectChangeEvent } from "@mui/material"
import { menuItemSX, StyledInputDropdown, StyledInputLabel } from "./input-dropdown.style"
import { ArrowDownIcon } from "../Arrow-Down-Icon/arrow-down-icon"


const InputDropdown: FC<CustomDropdownProps> = (props) => {

    const { id, label, labelId, children } = props
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef(null);

    // This is the right type according to material ui docs but typescript isn't happy with that
    const handleOptionChange = (event: SelectChangeEvent<string>, child?: React.ReactNode) => {

    };

    const handleChange = (ev: any) => {  //FIX: fix type
        const selectedItem = ev.target.value
        setSelectedOption(selectedItem)

    }

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleClickAway = () => {
        setIsOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <FormControl style={{ position: 'relative', width: '0px' }}>
                <StyledInputLabel id={labelId}>{label}</StyledInputLabel>

                <ArrowDownIcon top={"19"} handleClick={toggleDropdown} />
                <StyledInputDropdown
                    onClick={toggleDropdown}
                    IconComponent={() => null}
                    id={id}
                    value={selectedOption}
                    labelId={labelId}
                    label={label}
                    open={isOpen ? true : false}
                    onChange={handleChange}
                    ref={dropdownRef}

                >
                    {children?.map((child: any, idx: number) => (
                        <MenuItem
                            sx={menuItemSX}
                            key={idx}
                            value={child.value}

                        >
                            {child.name}
                        </MenuItem>
                    ))}
                </StyledInputDropdown>
            </FormControl>
        </ClickAwayListener>
    )
}

export default InputDropdown