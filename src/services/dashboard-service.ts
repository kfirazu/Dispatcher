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
    return {'hello' : 8}
}


function getArticlesDates(articleList: Article[]) {
    const formattedDatesArr: string[] = [];
    const monthNames = getPastSixMonth()

    articleList.forEach((article) => {
        const formattedDate = format(new Date(article.publishedAt), 'LLL');
        formattedDatesArr.push(formattedDate);
    });

    return formattedDatesArr;
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
    const topFourSources = sourceMap.slice(0, 4)

    return topFourSources
}
