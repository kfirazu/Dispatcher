export interface FilterBy {
    [key: string]: FilterOption
    type: FilterOption
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