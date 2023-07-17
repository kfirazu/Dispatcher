import React from "react"


const NewsContext = React.createContext({
    filterBy: {
        type: '',
        country: '',
        source: '',
        category: '',
        keyword: ''
    },
    updateFilterBy: (filterBy: any) => { }

})

export default NewsContext