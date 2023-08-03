import axios from 'axios';
import { countries, defaultCountry } from '../constants/constants';

export const locationService = {
    getIP,
    findCountryById
}

async function getIP() {
    const res = await axios.get('https://geolocation-db.com/json/');
    if (res.status === 200) return res.data;
    else throw new Error('Could not get IP');
}


function findCountryById(countryId: string) {
    const foundCountry = countries.find((country) => country.value === countryId)
    return foundCountry ? foundCountry : defaultCountry
}
