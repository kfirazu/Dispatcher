import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"
import CustomDropdown from "../Dropdown/custom-dropdown"
import MobileSortBar from "../Sort-Bar/mobile-sort-bar"
import { StyledSortBarContainer } from "../Sort-Bar/sort-bar.style"



const Filter = () => {

    const isMobile = useIsMobile()
    const isTablet = UseIsTablet()

    // Should accept children as props / The dropdowns type so it will be generic for changes.
    const categories = [
        { value: 'business', name: 'Business' },
        { value: 'entertainment', name: 'Entertainment' },
        { value: 'general', name: 'General' },
        { value: 'health', name: 'Health' },
        { value: 'science', name: 'Science' },
        { value: 'sports', name: 'Sports' },
        { value: 'technology', name: 'Technology' }

    ]

    const sources = [
        { value: 'וואלה', name: 'וואלה! חדשות' }, { value: 'וואלה', name: 'וואלה! תרבות' },
        { value: "הארץ", name: 'הארץ' }, { value: 'ספורט 5', name: 'ספורט 5' },
        { value: '"ynet ידיעות אחרונות"', name: '"ynet ידיעות אחרונות"' }, { value: '"כלכליסט"', name: '"כלכליסט"' },
        { value: '"mako"', name: '"mako"' }, { value: '"TheMarker"', name: '"TheMarker"' },
        { value: '"ערוץ 13"', name: '"ערוץ 13"' }, { value: '"מעריב און ליין"', name: '"מעריב און ליין"' },

    ]

    const countries = [
        { value: 'ar', name: 'Argentina' }, { value: 'au', name: 'Austrailia' },
        { value: 'at', name: 'Austria' }, { value: 'be', name: 'Belgium' },
        { value: 'br', name: 'Brazil' }, { value: 'bg', name: 'Bulgaria' },
        { value: 'ca', name: 'Canada' }, { value: 'cn', name: 'China' },
        { value: 'co', name: 'Colombia' }, { value: 'cu', name: 'Cuba' },
        { value: 'cz', name: 'Czech Republic' }, { value: 'eg', name: 'Egypt' },
        { value: 'fr', name: 'France' }, { value: 'de', name: 'Germany' },
        { value: 'gr', name: 'Greece' }, { value: 'hk', name: 'Hong Kong' },
        { value: 'hu', name: 'Hungary' }, { value: 'in', name: 'India' },
        { value: 'id', name: 'Indonesia' }, { value: 'ie', name: 'Ireland' },
        { value: 'ik', name: 'Israel' }, { value: 'it', name: 'Italy' }

    ]

    return (
        <>
            {!isMobile && !isTablet && (

                <StyledSortBarContainer>
                    <CustomDropdown items={countries} name={'country'} id={'country'} type="Country" />
                    <CustomDropdown items={categories} name={'category'} id={'category'} type="Catrgory" />
                    <CustomDropdown items={sources} name={'soruce'} id={'source'} type="Source" />

                </StyledSortBarContainer>
            )}
            {(isMobile || isTablet) && <MobileSortBar />}
        </>



    )

}
export default Filter