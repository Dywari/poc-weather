import {WeatherWeekList} from "./WeatherWeekList";
import IconDisplay from "../utils/IconWeather";
import CurrentWeather from "./blockTemplate/CurrentWeather";
import DetailPerHour from "./blockTemplate/DetailPerHour";
import CurrentMetric from "./blockTemplate/CurrentMetric";
import SunriseSunset from "./blockTemplate/SunriseSunset";
import HourlyForecast from "./blockTemplate/HourlyForecast";
import {BehaviorSubject, Subject} from "rxjs";
import City from "../entities/City";
import {useEffect, useState} from "react";
import GetWeather from "../services/WeatherService";
import {WeatherFull} from "../entities/WeatherFull";
export var citySubject = new Subject<City>();

let currentLatitude = 0;
let currentLongitude = 0;


export const needUpdateLocationAPi = (latitude: number, longitude: number): boolean => {
    if (currentLongitude === 0 && currentLatitude === 0) {
        return true;
    } else {
        // We don't need to refresh location if the geolocation has not changed within 3 km
        if (Math.abs(currentLatitude - latitude) > 0.03 || Math.abs(currentLongitude - longitude) > 0.03) {
            return true;
        } else {
            return false
        }
    }
}


export const MainLayout = () => {

    function usegetGeolocation()  {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log(currentLatitude, currentLongitude, 'every 5s');
                if (needUpdateLocationAPi(latitude, longitude)) {
                    currentLongitude = longitude;
                    currentLatitude = latitude;
                    // return {currentLatitude, currentLongitude};
                    // try {
                    //     const {data} = GetWeather(currentLatitude, currentLongitude)
                    //     //
                    //     console.log(data);
                    //     if (data !== undefined) {
                    //         console.log(WeatherFull.fromJson(data));
                    //     }
                    // } catch (error) {
                    //     console.error('Error fetching weather data:', error);
                    // }
                }

                setTimeout(usegetGeolocation, 5000);
            }, (error) => {
                console.error('Geolocation error:', error);
                setTimeout(usegetGeolocation, 5000);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }
    console.log('blopblopblop');
    usegetGeolocation();
    // const [weatherData, setWeatherData] = useState<any>(null);
    //
    // useEffect(() => {
    //     const updateWeather = (data: any) => {
    //         setWeatherData(data); // Mettre à jour l'état avec les données météo
    //     };
    //
    //     getGeolocation(updateWeather); // Appeler getGeolocation avec la fonction de mise à jour de l'état
    //
    //     return () => {
    //         // Nettoyage éventuel
    //     };
    // }, []);
    //
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
    return (<>
        {/*<IconDisplay iconCode="10n" size={50}/>*/}
        <div className={'flex  h-full'}>
            {/*<div className={'flex flex-[1_1_20%]'}>*/}
            {/*    /!*<WeatherWeekList city={citySubject}/>*!/*/}
            {/*</div>*/}
            <div className={'flex flex-[1_1_80%] flex-col bg-amber-500'}>
                <div className={'flex flex-[1_1_50%] bg-amber-100'}><CurrentWeather></CurrentWeather>
                </div>


                {/*<div className={'flex flex-[1_1_20%] bg-amber-200'}><HourlyForecast></HourlyForecast></div>*/}


                <div className={'flex flex-[1_1_20%] bg-amber-300'}><CurrentMetric></CurrentMetric></div>


                <div className={'flex flex-[1_1_20%] bg-amber-400'}><SunriseSunset></SunriseSunset></div>


                {/*<div className={'flex flex-[1_1_20%] bg-amber-500'}><DetailPerHour></DetailPerHour></div>*/}


            </div>
        </div>
    </>);
}
export default MainLayout;
