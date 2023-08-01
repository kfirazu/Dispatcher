
export interface FilterBy {
    [key: string]: string
    type: string
    source: string
    category: string
    country: string
    language: string
    sortBy: string
    // dates: DateOptions

}


export interface FilterOption {
    title?: string
    value?: string
    options?: DropdownOption[]
}

export interface DropdownOption {
    value: string | null
    title: string

}


