import axios from 'axios';
import ClientEnv from "../client-env";
import {skipToken, useQuery} from "@tanstack/react-query";
import {Subject} from "rxjs";
import {WeatherFull} from "../entities/WeatherFull";
let currentLatitude = 0;
let currentLongitude = 0;

export class WeatherService {
    private static instance: WeatherService;
    public weatherSubject: Subject<WeatherFull>

    private constructor() {
        this.weatherSubject = new Subject<WeatherFull>();
    }
    // create a subject in class for get data;

    public static getInstance(): WeatherService {
        if (!WeatherService.instance) {
            WeatherService.instance = new WeatherService();
        }
        return WeatherService.instance;
    }

    public async fetchWeather(latitude: number, longitude: number):Promise<any> {
         const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    lat: latitude,
                    lon: longitude,
                    lang: 'fr',
                    appid: ClientEnv.API_KEY,
                    units: 'metric',
                }
            });
         return  data;
    }

}
export const needUpdateLocationAPi = (latitude: number, longitude: number): boolean => {
    const updateCurrentPosition = () => {
        currentLongitude = longitude;
        currentLatitude = latitude;
    }
    if (currentLongitude === 0 && currentLatitude === 0) {
        updateCurrentPosition();
        return true;
    } else {
        // We don't need to refresh location if the geolocation has not changed within 3 km
        if (Math.abs(currentLatitude - latitude) > 0.03 || Math.abs(currentLongitude - longitude) > 0.03) {
            updateCurrentPosition();
            return true;
        } else {
            return false
        }
    }
}
const useWeather = (pos: { lat: number, lon: number } | null) => {
            return useQuery({
                queryKey: ['weather', pos?.lat, pos?.lon],
                queryFn: pos ? () => WeatherService.getInstance().fetchWeather(pos.lat, pos.lon) : skipToken,
            });

};




export default useWeather;