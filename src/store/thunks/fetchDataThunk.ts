import { createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit'; import { RootState } from '../store'
import { newsService } from '../../services/news.service'
import { FilterBy } from '../../models/filter-by'


export const fetchArticles = createAsyncThunk(
    `filter/fetchDataThunk`, async (updatedFilterBy: FilterBy, thunkApi) => {
        const filterBy = (thunkApi.getState() as RootState).filter.filterBy
        try {
            const res = await newsService.query(filterBy)
            const filteredArticles = res.articles
            return filteredArticles
        } catch (err) {
            console.log('Failed to get articles', err)
            throw err

        }

    }
)

export const fetchArticlesBySearchQuery: AsyncThunk<any, string, { state: RootState }> =
    createAsyncThunk(
        'filter/fetchBySearchQueryThunk', async (searchQuery: string, { rejectWithValue, getState }) => {
            const searchQueryFromStore = (getState() as RootState).filter.searchQuery
            const filterBy = (getState() as RootState).filter.filterBy
            try {
                console.log('fetchBySearchQuery')
                if (searchQuery === '') { return } // FIX: return value
                const res = await newsService.query(filterBy, searchQueryFromStore)
                console.log('query search from thunk', res)
                return res.articles
            } catch (err) {
                return rejectWithValue(JSON.stringify(err));
                throw err

            }

        }
    )
