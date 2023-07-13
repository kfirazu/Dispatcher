import SearchInputDropdown from "../search-Input-dropdown/search-input-dropdown"
import CustomInput from "../Input/custom-input"
import StyledContainer, { LogoWrapper, StyledInputWrapper } from "./app-header.style"
import logo from '../../assets/icon/logo.svg'


const AppHeader = () => {

    const options = [
        { value: 'everything', name: 'Everything', },
        { value: 'top-headlines', name: 'Top Headlines', }
    ]

    const handleChange = () => { }

    return (
        <StyledContainer>
            <LogoWrapper>
                <img src={logo} alt="" />
            </LogoWrapper>
            <StyledInputWrapper>
                <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleChange} label={'Text'} />
                <SearchInputDropdown id={"input-dropdown"} label={"Everything"} labelId={"input-dropdown"} children={options} placeholder={"Everything"} />

            </StyledInputWrapper>

        </StyledContainer>
    )
}

export default AppHeader