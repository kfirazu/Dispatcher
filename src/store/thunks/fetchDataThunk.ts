import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { newsService } from '../../services/news.service'
import { FilterBy } from '../../models/filter-by'


export const fetchArticles = createAsyncThunk(
    `filter/fetchDataThunk`, async (updatedFilterBy: FilterBy, thunkApi) => {
        const filterBy = (thunkApi.getState() as RootState).filter.filterBy
        console.log('filterBy from thunk', filterBy)
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