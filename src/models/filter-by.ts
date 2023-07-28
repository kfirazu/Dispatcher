import { FilterOptions } from "../services/news.service"

export interface FilterBy {
    [key: string]: FilterOption
    type: FilterOption
    source: FilterOption
    category: FilterOption
    country: FilterOption
    language: FilterOption
    // dates: DateOptions

}


interface FilterOption {
    title?: string
    value?: string
    options?: DropdownOption[]
    optionType?: FilterOptions
}

export interface DropdownOption {
    value: string | null
    title: string

}


