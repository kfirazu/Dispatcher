
export interface FilterBy {
    [key: string]: string | Date | undefined
    type: string
    source: string
    category: string
    country: string
    language: string
    sortBy: string
    from?: Date
    to?: Date
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
export interface DateOptions {
    from: Date | null
    to: Date | null
}

