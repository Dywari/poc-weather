import CurrentWeather from "./blockTemplate/CurrentWeather";
import CurrentMetric from "./blockTemplate/CurrentMetric";
import {useEffect, useState} from "react";
import {WeatherFull} from "../entities/WeatherFull";
import useWeather, {needUpdateLocationAPi} from "../services/WeatherService";

export const MainLayout = () => {
    let weatherData = null;
    const [position, setPosition] = useState<{ lat: number, lon: number } | null>(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    if (needUpdateLocationAPi(latitude, longitude)) {
                        setPosition({lat: latitude, lon: longitude});
                    }

                }, (error) => {
                    console.error('Geolocation error:', error);
                });
                setTimeout(getLocation, 5000);
            } else {
                console.error('Geolocation is not supported by this browser.');
                setTimeout(getLocation, 5000);
            }
        }
        getLocation();
    }, []);
    const {data} = useWeather(position)

    if (data !== undefined) {
        weatherData = WeatherFull.fromJson(data);
    }


    return (<>
        <div className={'flex h-full overflow-auto bg-slate-600 bg-content'}>
            <div className={'flex flex-1 flex-col '}>
                <div className={'flex flex-[1_1_30%]'}>
                    <CurrentWeather weather={weatherData}></CurrentWeather>
                </div>
                <div className={'flex flex-[1_1_20%]'}>
                    <CurrentMetric weather={weatherData}></CurrentMetric>
                </div>
                <div className={'flex flex-[1_1_20%]'}></div>

            </div>
        </div>
    </>);
}
export default MainLayout;
