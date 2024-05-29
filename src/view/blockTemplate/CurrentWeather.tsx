import {WeatherFull} from "../../entities/WeatherFull";

interface CurrentWeatherProps {
    weather: WeatherFull | null;
}
export function CurrentWeather({weather}:CurrentWeatherProps) {
    return (<>{weather?.name} </>);
}
export default CurrentWeather;