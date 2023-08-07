import { createAsyncThunk, AsyncThunk, } from '@reduxjs/toolkit'; import { RootState } from '../store'
import { FilterOptions, newsService } from '../../services/news.service'
import { FilterBy } from '../../models/filter-by'
import { locationService } from '../../services/location.service';


export const fetchArticles = createAsyncThunk(
    `filter/fetchDataThunk`, async (updatedFilterBy: FilterBy, thunkApi) => {
        const filterBy = (thunkApi.getState() as RootState).filter.filterBy
        const searchQueryFromStore = (thunkApi.getState() as RootState).filter.searchQuery
        try {
            console.log('GOTTTT INTTOOOOOO FETCHHHHH ARTICLESSSSSS')
            if (!filterBy) {
                console.log('filterBy is null or undefined. Skipping API call.');
                return { status: 'error', totalResults: 0, articles: [] };
            }
            // Check if the filterBy object only contains type: 'everything' || 'top-headlines and all other properties are empty
            const isEverythingFilter =
                (filterBy.type === FilterOptions.EVERYTHING ||
                    filterBy.type === FilterOptions.TOP_HEADLINES) &&
                Object.values(filterBy).every((value) => value === '');

            if (isEverythingFilter) {
                console.log('Skipping API call because filterBy contains type: "everything" || "top-headlines');
                return { articles: [], state: 'ok', totalResults: 0 };
            }
            console.log('FETCH ARTICLES DATA THUNKKK')
            const res = await newsService.query(filterBy, searchQueryFromStore)
            console.log('res:', res)
            // const filteredArticles = res.articles
            // return filteredArticles
            // console.log('res:', res)
            return res
        } catch (err) {
            console.log('Failed to get articles', err)
            throw err

        }

    }
)

export const fetchArticlesBySearchQuery: AsyncThunk<any, string, { state: RootState }> =
    createAsyncThunk(
        'filter/fetchBySearchQueryThunk', async (searchQuery: string, { rejectWithValue, getState }) => {
            console.log('fetch by search term THUNK2!!')
            const searchQueryFromStore = (getState() as RootState).filter.searchQuery
            const filterBy = (getState() as RootState).filter.filterBy
            try {
                const res = await newsService.query(filterBy, searchQueryFromStore)
                console.log('res:', res)
                return res
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
            const userCountry = locationService.findCountryById(countryId);
            return userCountry.value
        } catch (err) {
            return rejectWithValue(JSON.stringify(err));
        }
    });
