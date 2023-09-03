import { StyledDropdown, StyledMenuItemSX, StyledMenuListSX } from './custom-dropdown.styles'
import { ClickAwayListener, FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react';
import { ArrowDownIcon } from '../Arrow-Down-Icon/arrow-down-icon';
import { CustomDropdownProps } from '../../models/custom-dropdown-interface';
import { updateFilterBy } from '../../store/news/filter.reducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks.store';
import { FilterBy } from '../../models/filter-by';
import { fetchArticles } from '../../store/thunks/fetchDataThunk';
import { setIsFirstSearch } from '../../store/news/news.reducer';


const CustomDropdown: FC<CustomDropdownProps> = (props) => {

    const { id, name, labelId, items, type, disabled } = props

    const dropdownRef = useRef(null);
    const dispatch = useAppDispatch()
    const filterBy = useAppSelector(state => state.filter.filterBy)
    // const isFilterCleared = useAppSelector(state => state.filter.isFilterCleared)
    const isFirstSearch = useAppSelector(state => state.news.isFirstSearch)
    const isEverything = useAppSelector(state => state.system.isEverything)
    const [isOpen, setIsOpen] = useState(false)
    const [updatedFilterBy, setUpdatedFilterBy] = useState<FilterBy>(filterBy)
    const [selectedOption, setSelectedOption] = useState<string>('')


    useEffect(() => {
        if (selectedOption) {
            dispatch(fetchArticles(updatedFilterBy))
        }
    }, [filterBy])

    // Reset dropdowns placeholder when change between everything & top-headlines
    useEffect(() => {
        setSelectedOption!('')
    }, [isEverything])

    // useEffect(() => {
    //     setSelectedOption('')
    // }, [isFilterCleared])


    const toggleDropdown = () => {
        setIsOpen((prevOpen) => !prevOpen)
    }

    const handleClickAway = () => {
        setIsOpen(false)
    }

    // Function to find the corresponding title in the countries array
    const findTitleByValue = (value: string) => {
        const dropdownOption = items?.find((item) => item.value === value);
        return dropdownOption ? dropdownOption.title : value;
    }

    const handleDropdownChange = (ev: SelectChangeEvent<unknown>) => {
        // dispatch(() => setIsFilterCleared(false))
        const { name, value } = ev.target
        const strValue = String(value)
        setSelectedOption(strValue)


        setUpdatedFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            [name]: strValue
        }))
        dispatch(updateFilterBy({
            title: name,
            value: strValue
        }))
        if (isFirstSearch) {
            dispatch(setIsFirstSearch())
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <FormControl style={{ position: 'relative' }}>
                <ArrowDownIcon handleClick={toggleDropdown} disabled={disabled}/>
                <StyledDropdown
                    onClick={toggleDropdown}
                    IconComponent={() => null}
                    id={id}
                    name={name}
                    value={selectedOption}
                    labelId={labelId}
                    disabled={disabled}
                    open={isOpen ? true : false}
                    onChange={(ev) => handleDropdownChange(ev)}
                    displayEmpty={true}
                    renderValue={(value: unknown): React.ReactNode =>
                        findTitleByValue(String(value)) ? findTitleByValue(String(value)) : type
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
                    {items?.map((child: any, idx: number) =>
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