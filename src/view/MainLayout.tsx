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
import {WeatherFull} from "../entities/WeatherFull";
import useWeather  from "../services/WeatherService";
export var citySubject = new Subject<City>();




export const MainLayout = () => {
    let weatherData = null;
    const [position, setPosition] = useState<{lat:number, lon:number} | null>(null);
    console.log('MainLayout init ??', position);

    useEffect(() => {
        const geoloc = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    console.log(' setposition');
                    // if (needUpdateLocationAPi(latitude, longitude)) {
                        console.log('');
                        setPosition({lat: latitude, lon: longitude});
                    // }

                }, (error) => {
                    console.error('Geolocation error:', error);
                });
                setTimeout(geoloc,5000);
            } else {
                console.error('Geolocation is not supported by this browser.');
                setTimeout(geoloc,5000);
            }
        }
       geoloc();
    }, []);
        const {data} = useWeather(position)

        console.log(data);
        if (data !== undefined) {
            const resp = WeatherFull.fromJson(data);
            weatherData = resp;
            console.log(weatherData);
        }


    return (<>
        {/*<IconDisplay iconCode="10n" size={50}/>*/}
        <div className={'flex  h-full'}>
            {/*<div className={'flex flex-[1_1_20%]'}>*/}
            {/*    /!*<WeatherWeekList city={citySubject}/>*!/*/}
            {/*</div>*/}
            <div className={'flex flex-[1_1_80%] flex-col bg-amber-500'}>
                <div className={'flex flex-[1_1_50%] bg-amber-100'}><CurrentWeather weather={weatherData}></CurrentWeather>
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
