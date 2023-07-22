import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import DateSelector from "../Date-Selector/date-selector"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "./mobile-sort-bar"
import { StyledSortBarContainer } from "./sort-bar.style"

const SortBar = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const sortByArr = [
        { value: 'source', name: 'Source' },
        { value: 'date', name: 'Date' },
        { value: 'language', name: 'Language' }
    ]

    const sourcesArr = [
        { value: 'וואלה', name: 'וואלה! חדשות' }, { value: 'וואלה', name: 'וואלה! תרבות' },
        { value: "הארץ", name: 'הארץ' }, { value: 'ספורט 5', name: 'ספורט 5' },
        { value: '"ynet ידיעות אחרונות"', name: '"ynet ידיעות אחרונות"' }, { value: '"כלכליסט"', name: '"כלכליסט"' },
        { value: '"mako"', name: '"mako"' }, { value: '"TheMarker"', name: '"TheMarker"' },
        { value: '"ערוץ 13"', name: '"ערוץ 13"' }, { value: '"מעריב און ליין"', name: '"מעריב און ליין"' },

    ]
    return (
        <>
            {!isMobile && !isTablet && (

                <StyledSortBarContainer>
                    <CustomDropdown items={sortByArr} type="Sort by" />
                    <DateSelector />
                    <CustomDropdown items={sourcesArr} type="Sources" />
                    <CustomDropdown items={sourcesArr} type="Language" />
                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}

        </>
    )
}

export default SortBar