import InputDropdown from "../Input-dropdown/input-dropdown"
import CustomInput from "../Input/custom-input"
import StyledContainer, { StyledInputWrapper } from "./app-header.style"
import  logo  from '../../assets/icon/logo.svg'


const AppHeader = () => {

    const options = [
        { value: 'everything', name: 'Everything', },
        { value: 'top-headlines', name: 'Top Headlines', }
    ]

    const handleChange = () => { }

    return (
        <StyledContainer>
            <img src={logo} alt="" />
            <StyledInputWrapper>
                <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleChange} label={'Text'} />
                <InputDropdown id={"input-dropdown"} label={"Everything"} labelId={"input-dropdown"} children={options} />

            </StyledInputWrapper>

        </StyledContainer>
    )
}

export default AppHeader