import { FC } from "react"
import { StyledInput, StyledIcon, InputWrapper } from "./custom-input.style"
import serachIcon from '../../assets/icon/search-icon.svg'



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
            <StyledIcon src={serachIcon} />

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