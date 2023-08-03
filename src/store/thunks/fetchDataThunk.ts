import { createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit'; import { RootState } from '../store'
import { newsService } from '../../services/news.service'
import { FilterBy } from '../../models/filter-by'
import { locationService } from '../../services/location.service';


export const fetchArticles = createAsyncThunk(
    `filter/fetchDataThunk`, async (updatedFilterBy: FilterBy, thunkApi) => {
        const filterBy = (thunkApi.getState() as RootState).filter.filterBy
        const searchQueryFromStore = (thunkApi.getState() as RootState).filter.searchQuery
        try {
            const res = await newsService.query(filterBy, searchQueryFromStore)
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
                if (searchQuery === '') { return [] } // FIX: return value
                const res = await newsService.query(filterBy, searchQueryFromStore)
                return res.articles
            } catch (err) {
                return rejectWithValue(JSON.stringify(err));
                throw err

            }

        }
    )

export const getIPAddress: AsyncThunk<any, void, { state: RootState }> =
    createAsyncThunk('filter/getIPAddress', async (_, { rejectWithValue }) => {
        try {
            const response = await locationService.getIP();
            const countryId = response.country_code.toLowerCase();
            console.log('countryId:', countryId)
            const userCountry = locationService.findCountryById(countryId);
            console.log('userCountry:', userCountry)
            return userCountry.value
        } catch (err) {
            return rejectWithValue(JSON.stringify(err));
        }
    });
