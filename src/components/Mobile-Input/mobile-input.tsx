import { Dispatch, FC, FormEvent, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react"
import { StyledFormContainer, StyledFrom, StyledTextInput } from "./mobile-input.style"
import StyledIcon from "../icon/icon.style"
import goBackIcon from '../../assets/icon/go-back-icon.svg'
import clearIcon from '../../assets/icon/remove-icon.svg'


interface MobileInputProps {
    handleFocus: () => void
    handleBack: () => void
    handleSerachSubmit: (searchQuery: string) => void
    debounceOnChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    searchTerm: string
    setSearchTerm: Dispatch<SetStateAction<string>>
    name: string

}

type InputRef = MutableRefObject<HTMLInputElement | null>;


const MobileInput: FC<MobileInputProps> = ({
    handleFocus, handleSerachSubmit,
    debounceOnChange, handleBack,
    placeholder, searchTerm, setSearchTerm, name }) => {

    const searchInputRef: InputRef = useRef(null)

    useEffect(() => {
        searchInputRef.current?.focus()
    }, [])

    const handleClear = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = ''
        }
        setSearchTerm('')

    }

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        handleSerachSubmit(searchTerm)
    }
    return (
        <StyledFormContainer>
            <StyledIcon src={goBackIcon} width="24" height="24" onClick={handleBack} />
            <StyledFrom onSubmit={(ev) => handleSubmit(ev)}>
                <StyledTextInput type="text"
                    name={name}
                    max={40}
                    placeholder={placeholder}
                    onChange={(ev) => debounceOnChange(ev)}
                    onFocus={handleFocus}
                    autoComplete="off"
                    ref={searchInputRef}
                />
            </StyledFrom>
            <StyledIcon src={clearIcon} width="18" height="18" onClick={handleClear} />

        </StyledFormContainer>

    )
}

export default MobileInput