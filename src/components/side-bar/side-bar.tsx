import { FC, useEffect, useState } from "react"
import MobileBlackScreen from "../helpers/mobile-black-screen"
import { StyledButton, StyledButtonContainer, StyledSideBarContainer } from "./side-bar.style"
import { useAppDispatch, useAppSelector } from "../../store/hooks.store"
import { FilterBy } from "../../models/filter-by"
import { categories, countries, languages, searchInOptions, sortByArr } from "../../constants/constants"
import { Everything, TopHeadlines } from "./side-bar.types"
import SideBarContent from "./components/side-bar-content"
import SideBarDefault from "./components/side-bar-default"
import { setIsMobileDatePickerOpen, updateFilterBy } from "../../store/news/filter.reducer"
import { fetchArticles } from "../../store/thunks/fetchDataThunk"
import { setIsEverything, setIsSideBarOpen } from "../../store/system/system.reducer"
import { SideBarType } from "../Sort-Bar/mobile-sort-bar"
import SortBySideBar from "./components/sort-by-side-bar"
import { toast } from "react-toastify"
import useIsMobile from "../../hooks/useIsMobile"
import MobileDatePicker from "../Date-Selector/mobile-date-picker"

interface SideBarProps {
}
const SideBar: FC<SideBarProps> = () => {

    const isMobile = useIsMobile()
    const dispatch = useAppDispatch()
    const isSideBarOpen = useAppSelector(state => state.system.isSideBarOpen)
    const filterBy = useAppSelector(state => state.filter.filterBy)
    const isEverything = useAppSelector(state => state.system.isEverything)
    const everythingSources = useAppSelector(state => state.filter.everythingSources)
    const currArticlesSources = useAppSelector(state => state.filter.currArticlesSources)
    const [selectedCategory, setSelectedCategory] = useState<string | null>('')
    const [selectedCategoryValue, setSelectedCategoryValue] = useState<string | null>(null)
    const [selectedValues, setSelectedValues] = useState<{ [key: string]: string | null }>({});
    const [isDefaultSideBar, setIsDefaultSideBar] = useState(true)
    const [updatedFilterBy, setUpdatedFilterBy] = useState<FilterBy>(filterBy)
    const sideBarType = useAppSelector(state => state.filter.mobileSideBarType)

    const handleSelectFilterCategory = (filter: string) => {
        setSelectedCategory(filter)
        console.log('selecTedCategory:', selectedCategory)
        setSelectedCategoryValue(selectedValues[filter] || null);
        if (selectedCategoryValue === "Everything" || selectedCategoryValue === 'Top headlines') {
            dispatch(setIsEverything(!isEverything))
        }
        if (selectedCategory === "Date") {
            onSelectDateFilter()
        }
        setIsDefaultSideBar(false)
        // if (selectedCategory === "Dates") {

        // }

    }

    // useEffect(() => {
    //     console.log('selecTedCategory:', selectedCategory);
    // }, [selectedCategory]);


    const onSelectCategoryValue = (value: string, title: string) => {
        setSelectedCategoryValue(title)
        if (value === "Everything") {
            dispatch(setIsEverything(!isEverything))
        }
        setSelectedValues((prevState) => ({
            ...prevState,
            [selectedCategory || '']: title, // Using an empty string as key when selectedCategory is null
        }));
        setSelectedCategory(null)

        dispatch(updateFilterBy({
            title: selectedCategory!.toLowerCase(),
            value: value
        }))
        toast.success(`${title} was added to filter`, {
            position: isMobile ? "top-center" : "bottom-left",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
            },
        })

        setIsDefaultSideBar(true)
    }

    const onSelectDateFilter = () => {
        dispatch(setIsMobileDatePickerOpen(true))
        dispatch(setIsSideBarOpen(false))

    }

    const onSelectSortByValue = (value: string, title: string) => {
        if (filterBy.source === '') {
            toast.info(`Please select a source before applying sorting.`, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: {
                },
            })
        }
        if (filterBy.source !== '') {
            setSelectedCategory(title)
            setSelectedCategory(null)
            dispatch(updateFilterBy({
                title: 'sortBy',
                value: value
            }))


            toast.success(`"${title}" was added to filter`, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: {
                },
            })
        }

    }

    const { country, source, category, language, type, dates, sortBy } = filterBy
    const isTopHeadlinesSourceDisabled = () => {
        if (category !== '' || country !== '') {
            return true
        }
        return false
    }

    const setEverythingFiltersDisabled = () => {
        if (source === '') {
            return true
        }
        return false
    }
    const handleSubmit = () => {
        dispatch(fetchArticles(updatedFilterBy))
        dispatch(setIsSideBarOpen(false))

    }
    const handleBack = () => {
        setSelectedCategory(null)
        setIsDefaultSideBar(true)
        if (sideBarType === SideBarType.SORT_BY) {
            dispatch(setIsSideBarOpen(false))
        }

    }

    const setChildren = () => {
        switch (selectedCategory) {
            case TopHeadlines.COUNTRY:
                return countries
            case TopHeadlines.CATEGORY:
                return categories
            case Everything.LANGUAGE:
                return languages
            case Everything.SEARCHIN:
                return searchInOptions
            case TopHeadlines.SOURCES:
                return currArticlesSources
            case Everything.SOURCES:
                return everythingSources

            default:
                return []
        }
    }

    return (
        <>
            <MobileBlackScreen isSideBarOpen={isSideBarOpen} />
            {isSideBarOpen &&

                <StyledSideBarContainer>
                    {isDefaultSideBar && sideBarType !== SideBarType.SORT_BY &&
                        <SideBarDefault
                            handleSelectFilterCategory={handleSelectFilterCategory}
                            selectedCategory={selectedCategory}
                            selectedValues={selectedValues}
                            selectedCategoryValue={selectedCategoryValue}
                            onSelectDateFilter={onSelectDateFilter}
                            setEverythingFiltersDisabled={setEverythingFiltersDisabled}
                        // disabled={selectedCategoryValue === "Everything" ? setEverythingFiltersDisabled() : isTopHeadlinesSourceDisabled()}

                        />
                    }
                    {sideBarType === SideBarType.FILTER && !isDefaultSideBar &&
                        <SideBarContent
                            onSelectCategoryValue={onSelectCategoryValue}
                            children={setChildren()}
                            filterTitle={selectedCategory}
                            handleBack={handleBack}
                        // short if with the function according to if is everything
                        />
                    }
                    {sideBarType === SideBarType.SORT_BY &&
                        <SortBySideBar
                            onSelectSortByValue={onSelectSortByValue}
                            children={sortByArr}
                            filterTitle={"Sort by"}
                            handleBack={handleBack}
                        />

                    }

                    <StyledButtonContainer>
                        <StyledButton onClick={handleSubmit}>VIEW RESULTS</StyledButton>

                    </StyledButtonContainer>
                </StyledSideBarContainer>
            }
        </>
    )
}

export default SideBar





