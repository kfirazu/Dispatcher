import { Article } from "../models/article-interface";
import { format, subMonths } from "date-fns"


export const dashboardService = {
    calcSourcePercentage,
    getSourceCount,
    getArticlesDates,
    getPastSixMonth,
    getSourcePercentageListToShow

}

export interface SourceCount {
    [key: string]: number
}

interface ArticleSource {
    id: string | null
    name: string
}

function calcSourcePercentage(articleList: Article[]) {
    const totalCount = articleList.length
    const sourceCount = getSourceCount(articleList)
    const percentages = Object.values(sourceCount).map(count => (count / totalCount) * 100);
    return percentages

}

function getSourceCount(articleList: Article[]): SourceCount {
    const sourceCount = articleList.reduce((acc, article) => {
        const { name }: ArticleSource = article.source
        if (!acc[name]) {
            acc[name] = 0
        }
        acc[name]++
        return acc
    }, {} as SourceCount)
    return sourceCount
    return { 'hello': 8 }
}


function getArticlesDates(articleList: Article[]) {
    //  array of months names LLL format
    const formattedDatesArr: string[] = []

    // Past 6 months for months line under line- chart
    const monthNames = getPastSixMonth()

    articleList.forEach((article) => {
        const formattedDate = format(new Date(article.publishedAt), 'LLL');
        formattedDatesArr.push(formattedDate)
    })

    // Object map to count how many times each month occurs in array
    const countMonth = countMonthsOccurrences(formattedDatesArr)
    // convert map to array
    const countMonthEntries = Object.entries(countMonth)
    // Get the count for the current month from the 'countMonthEntries' array. If the month is not found, default to 0.
    const dataCounts: number[] = monthNames.map((month: string) => {
        const monthIndex = monthNames.indexOf(month);
        return monthIndex !== -1 ? (countMonthEntries[monthIndex] ? countMonthEntries[monthIndex][1] : 0) : 0;

    })

    return dataCounts.reverse()
}

function countMonthsOccurrences(formattedDatesArr: string[]) {
    const monthOccurrences: { [month: number]: number } = {}

    formattedDatesArr.forEach((formattedDate) => {
        const dateObj = new Date(formattedDate + ' 1, 2000')
        const month = dateObj.getMonth() + 1

        monthOccurrences[month]
            ? monthOccurrences[month]++
            : monthOccurrences[month] = 1
    })

    return monthOccurrences
}

function getPastSixMonth() {
    const currDate = new Date()
    const pastMonthArr = []

    for (let i = 0; i < 6; i++) {
        const pastMonth = subMonths(currDate, i)
        const monthName = format(pastMonth, 'LLL')
        pastMonthArr.unshift(monthName)
    }
    return pastMonthArr
}

function getSourcePercentageListToShow(articleList: Article[]) {

    const percentagesArr = calcSourcePercentage(articleList)
    const sourceCount = getSourceCount(articleList)
    const sources = Object.keys(sourceCount)

    const sourceMap = sources.map((source, idx) => ({
        name: source,
        percentage: percentagesArr[idx]
    }))
    sourceMap.sort((a, b) => b.percentage - a.percentage)
    // const topFourSources = sourceMap.slice(0, 4)

    return sourceMap
}
