import { FC } from "react"
import { StyledInput, StyledIcon, InputWrapper } from "./custom-input.style"




export interface CustomInputProps {
    name: string
    placeholder: string
    id: string
    handleChange: () => void
    handleFocus: () => void
    label: string
}

const CustomInput: FC<CustomInputProps> = ({ name, placeholder, id, handleChange, handleFocus, label }) => {
    return (
        <InputWrapper>
            {/* <label htmlFor={id}>{label} <span>*</span></label> */}
            <StyledIcon>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2109 20C16.2767 20 20.3834 15.9706 20.3834 11C20.3834 6.02944 16.2767 2 11.2109 2C6.14501 2 2.03833 6.02944 2.03833 11C2.03833 15.9706 6.14501 20 11.2109 20Z" stroke="#5A5A89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.4218 22L18.3451 18" stroke="#5A5A89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </StyledIcon>
            <StyledInput type="text"
                name={name}
                max={40}
                placeholder={placeholder}
                // value={value}
                id={id}
                onChange={handleChange}
                onFocus={handleFocus}
            />

        </InputWrapper>
    )

}

export default CustomInput