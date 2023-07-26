import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { newsService } from '../../services/news.service'
import { FilterBy } from '../../models/filter-by'


export const fetchArticles = createAsyncThunk(
    `filter/fetchDataThunk`, async (updatedFilterBy: FilterBy, thunkApi) => {
        const filterBy = (thunkApi.getState() as RootState).filter.filterBy
        try {
            const res = await newsService.query(updatedFilterBy)
            const filteredArticles = res.articles
            return filteredArticles
        } catch (err) {
            console.log('Failed to get articles', err)
            throw err

        }

    }
)

export const fetchArticlesBySearchQuery = createAsyncThunk(
    'filter/fetchBySearchQueryThunk', async (searchQuery: string, thunkApi) => {
        const searchQueryFromStore = (thunkApi.getState() as RootState).filter.searchQuery
        const filterBy = (thunkApi.getState() as RootState).filter.filterBy
        try {
            // if (searchQuery! == '') {
                const res = await newsService.query(filterBy, searchQuery)
                console.log('query search from thunk', res.articles)
                return res.articles
            // }

        } catch (err) {
            console.log('Failed to get articles', err)
            throw err

        }

    }
)