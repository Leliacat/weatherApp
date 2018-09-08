
import axios from 'axios';

const API_KEY = '5b05499a786fb9028f73e29e94886c12';

const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url, {
        params: {
            headers:'Access-Control-Allow-Origin'
        }
    });
   

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}


