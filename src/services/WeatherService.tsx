import { useEffect, useState } from "react";
import axios from 'axios';
import ClientEnv from "../client-env";
import {useQuery} from "@tanstack/react-query";
import {Subject} from "rxjs";
import {WeatherFull} from "../entities/WeatherFull";

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
         // data = WeatherFull.fromJson(data)
         return  data;
        //     .then((response) => {
        //         const weather =;
        //         console.log(weather);
        //         // this.weatherSubject.next(weather);
        //         return weather;
        //     })
        // return weather;

    }

}
const GetWeather = (latitude: number, longitude: number) => {
    return useQuery({
        queryKey: ['weather', latitude, longitude],
        queryFn: () => WeatherService.getInstance().fetchWeather(latitude, longitude)
});
};
export default GetWeather;