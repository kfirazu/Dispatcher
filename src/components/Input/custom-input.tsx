import { FC, KeyboardEvent, useEffect } from "react"
import { StyledInput, StyledIcon, InputWrapper } from "./custom-input.style"
import serachIcon from '../../assets/icon/search-icon.svg'
import useIsMobile from "../../hooks/useIsMobile"
import { UseIsTablet } from "../../hooks/useIsTablet"



export interface CustomInputProps {
    name: string
    placeholder: string
    id: string
    debounceOnChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
    handleFocus: () => void
    label: string
    onSubmit: (value: string) => void
}

const CustomInput: FC<CustomInputProps> = ({ name, placeholder, id, debounceOnChange, handleFocus, onSubmit }) => {

    const isTablet = UseIsTablet()
    const isMobile = useIsMobile()

    const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
        const target = ev.target as HTMLInputElement;
        const { value } = target
        if (ev.key === "Enter") {
            ev.preventDefault()
            onSubmit(value)
        }

    }

    return (
        <InputWrapper isMobile={isMobile} isTablet={isTablet}>
            <StyledIcon src={serachIcon} />

            <StyledInput type="text"
                name={name}
                max={40}
                placeholder={placeholder}
                id={id}
                onChange={(ev) => debounceOnChange(ev)}
                onFocus={handleFocus}
                autoComplete="off"
                onKeyDown={(ev) => handleKeyDown(ev)}

            />

        </InputWrapper>
    )

}

export default CustomInput