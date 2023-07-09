import InputDropdown from "../Input-dropdown/input-dropdown"
import CustomInput from "../Input/custom-input"
import StyledContainer, { StyledInputWrapper } from "./app-header.style"


const AppHeader = () => {

    const options = [
        { value: 'everything', name: 'Everything', },
        { value: 'top-headlines', name: 'Top Headlines', }
    ]

    const handleChange = () => { }

    return (
        <StyledContainer>
            <svg width="66" height="50" viewBox="0 0 66 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M13.6084 13.6076C14.2122 11.993 15.7591 10.9223 17.488 10.9223H60.0387C62.9258 10.9223 64.9265 13.7932 63.9183 16.4895L52.3916 47.3147C51.7878 48.9293 50.2409 50 48.512 50H5.96133C3.07419 50 1.07354 47.1291 2.08176 44.4329L13.6084 13.6076Z" fill="white" />
                <path opacity="0.4" d="M9.02415 9.30379C9.44328 7.41364 11.1245 6.06796 13.0668 6.06796H55.974C58.6208 6.06796 60.5879 8.50895 60.0167 11.0846L52.105 46.7642C51.6858 48.6543 50.0046 50 48.0623 50H5.15506C2.50835 50 0.541254 47.559 1.11238 44.9834L9.02415 9.30379Z" fill="white" />
                <path opacity="0.6" d="M4.49971 4.93125C4.71039 2.82105 6.49176 1.21359 8.61959 1.21359H51.6857C54.1343 1.21359 56.048 3.32 55.8056 5.74836L51.7587 46.2823C51.548 48.3925 49.7666 50 47.6388 50H4.57267C2.12403 50 0.21034 47.8936 0.452787 45.4652L4.49971 4.93125Z" fill="white" />
                <path d="M0 4.12621C0 1.84737 1.85364 0 4.14022 0H47.2472C49.5338 0 51.3875 1.84737 51.3875 4.12621V45.8738C51.3875 48.1526 49.5338 50 47.2472 50H4.14022C1.85364 50 0 48.1526 0 45.8738V4.12621Z" fill="white" />
                <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M33.5784 24.8014C33.5784 20.2844 30.0252 16.6654 25.6937 16.6654L25.6937 10.9224C33.1819 10.9224 39.2103 17.1599 39.2103 24.8014C39.2103 32.443 33.1819 38.6805 25.6937 38.6805L25.6937 32.9375C30.0252 32.9375 33.5784 29.3185 33.5784 24.8014Z" fill="#262146" />
                <path fillRule="evenodd" clipRule="evenodd" d="M20.0618 24.8014C20.0618 20.2844 16.5086 16.6654 12.1771 16.6654L12.1771 10.9224C19.6653 10.9224 25.6937 17.1599 25.6937 24.8014C25.6937 32.443 19.6653 38.6805 12.1771 38.6805L12.1771 32.9375C16.5086 32.9375 20.0618 29.3185 20.0618 24.8014Z" fill="#262146" />
                <path d="M25.6937 38.6805H12.1771V32.9656H25.6937V38.6805Z" fill="#514D6B" />
                <path d="M25.6937 16.6373H12.1771V10.9223H25.6937V16.6373Z" fill="#FF3E3E" />
            </svg>
            <StyledInputWrapper>
                <CustomInput name='search' id='search' placeholder='Search' handleChange={handleChange} handleFocus={handleChange} label={'Text'} />
                <InputDropdown id={"input-dropdown"} label={"Everything"} labelId={"input-dropdown"} children={options} />

            </StyledInputWrapper>

        </StyledContainer>
    )
}

export default AppHeader