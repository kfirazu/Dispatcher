import { FC } from "react"
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
}

const CustomInput: FC<CustomInputProps> = ({ name, placeholder, id, debounceOnChange, handleFocus }) => {

    const isTablet = UseIsTablet()
    const isMobile = useIsMobile()

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

            />

        </InputWrapper>
    )

}

export default CustomInput