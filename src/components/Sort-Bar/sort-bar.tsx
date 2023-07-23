import { FC } from "react"
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import DateSelector from "../Date-Selector/date-selector"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "./mobile-sort-bar"
import { StyledSortBarContainer } from "./sort-bar.style"

interface SortBarProps {
    onOpenSideBar: () => void
}


const SortBar: FC<SortBarProps> = ({ onOpenSideBar }) => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    const sortByArr = [
        { value: 'publishedAt', name: 'Published at' },
        { value: 'popularity', name: 'Popularity' },
        { value: 'relevancy', name: 'Relevancy' }
    ]

    const sourcesArr = [
        { value: 'וואלה', name: 'וואלה! חדשות' }, { value: 'וואלה', name: 'וואלה! תרבות' },
        { value: "הארץ", name: 'הארץ' }, { value: 'ספורט 5', name: 'ספורט 5' },
        { value: '"ynet ידיעות אחרונות"', name: '"ynet ידיעות אחרונות"' }, { value: '"כלכליסט"', name: '"כלכליסט"' },
        { value: '"mako"', name: '"mako"' }, { value: '"TheMarker"', name: '"TheMarker"' },
        { value: '"ערוץ 13"', name: '"ערוץ 13"' }, { value: '"מעריב און ליין"', name: '"מעריב און ליין"' },

    ]

    const languageArr = [
        { value: 'ar', name: 'Arabic' },
        { value: 'de', name: 'German' },
        { value: 'en', name: 'English' },
        { value: 'es', name: 'Spanish' },
        { value: 'fr', name: 'French' },
        { value: 'it', name: 'Itilian' },
        { value: 'nl', name: 'Dutch' },
        { value: 'no', name: 'Norwegian' },
        { value: 'pt', name: 'Portuguese' },
        { value: 'ru', name: 'Russian' },
        { value: 'sv', name: 'Swedish' },
        { value: 'tr', name: 'Turkish' },
        { value: 'zh', name: 'Chinese' },
        { value: 'da', name: 'Danish' },
        { value: 'fi', name: 'Finnish' },
        { value: 'he', name: 'Hebrew' },
        { value: 'id', name: 'Indonesian' },
        { value: 'ja', name: 'Japanese' },
        { value: 'ko', name: 'Korean' },
        { value: 'ms', name: 'Malay' },




    ]
    return (
        <>
            {!isMobile && !isTablet && (

                <StyledSortBarContainer>
                    <CustomDropdown items={sortByArr} type="Sort by" />
                    <DateSelector />
                    <CustomDropdown items={sourcesArr} type="Sources" />
                    <CustomDropdown items={languageArr} type="Language" />
                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar onOpenSideBar={onOpenSideBar}/>}

        </>
    )
}

export default SortBar