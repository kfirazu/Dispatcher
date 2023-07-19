import { FC, FocusEvent } from "react"
import { StyledInput, StyledIcon, InputWrapper } from "./custom-input.style"
import serachIcon from '../../assets/icon/search-icon.svg'



export interface CustomInputProps {
    name: string
    placeholder: string
    id: string
    handleChange: () => void
    handleFocus: () => void
    handleBlur: (ev:FocusEvent<HTMLInputElement>) => void
    label: string
}

const CustomInput: FC<CustomInputProps> = ({ name, placeholder, id, handleChange, handleFocus, handleBlur }) => {

    return (
        <InputWrapper>
            <StyledIcon src={serachIcon} />

            <StyledInput type="text"
                name={name}
                max={40}
                placeholder={placeholder}
                id={id}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={(ev) => handleBlur(ev)}
                autoComplete="off"

            />

        </InputWrapper>
    )

}

export default CustomInput