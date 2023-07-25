export interface FilterBy {
    [key: string]: FilterOption
    source: FilterOption
    category: FilterOption
    country: FilterOption
    languages: FilterOption
    // dates: DateOptions

}


interface FilterOption {
    title?: string
    value?: string
    options?: string[]
}