import CustomDropdown from "../Dropdown/custom-dropdown"
import { StyledContainer } from "./filter.style"



const Filter = () => {

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
        <StyledContainer>
            <CustomDropdown children={countries} id={'country'} type="Country" />
            <CustomDropdown children={categories} id={'category'} type="Catrgory" />
            <CustomDropdown children={sources} id={'soruce'} type="Source" />

        </StyledContainer>
    )

}
export default Filter