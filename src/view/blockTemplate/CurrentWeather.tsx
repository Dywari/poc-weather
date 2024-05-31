import {WeatherFull} from "../../entities/WeatherFull";
import {Card, CardContent, Skeleton, Typography} from "@mui/material";
import IconDisplay from "../../utils/IconWeather";

export interface CurrentWeatherProps {
    weather: WeatherFull | null;
}

export function CurrentWeather({weather}: CurrentWeatherProps) {
    const currentDate = () => {
        const options: Intl.DateTimeFormatOptions = {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'};
        const date = new Date();
        return date.toLocaleDateString('fr-FR', options);
    };

    return (
        <>
            {weather ?
                <Card className={'w-full !h-[calc(100%-30px)] m-[15px]'}>
                    <CardContent className={'w-full h-full bg-slate-800'}>
                        <div className={'w-full h-full flex flex-row lt-md:flex-col'}>
                            <div className={'flex flex-[50%] h-full flex-col justify-center items-start content-center'}>

                                <div className={'flex flex-col'}>

                                    <Typography variant="h2" color="primary.dark">
                                        {currentDate()}
                                    </Typography>

                                    <div className={'flex flex-row items-center'}>

                                        <Typography variant="h2" color="primary.dark">
                                            {weather?.name}
                                        </Typography>

                                        <IconDisplay iconCode={weather?.weather[0].icon ?? null} size={100}/>
                                    </div>
                                </div>

                                <Typography variant="h1" color="primary" gutterBottom>
                                    {weather?.main.temp}°C
                                </Typography>
                            </div>

                            <div className={'flex flex-[50%] h-full flex-col justify-center items-end content-end'}>
                                <Typography variant="h4" color="primary" gutterBottom>
                                    Ciel : {weather?.weather[0].description}
                                </Typography>

                                <div className={'flex flex-row flex-wrap gap-[10px]'}>

                                    <Typography className={'xs:block hidden'} variant="h4" color="primary" gutterBottom>
                                        TR. :
                                    </Typography>

                                    <Typography className={'xs:hidden'} variant="h4" color="primary" gutterBottom>
                                        Température ressentie :
                                    </Typography>

                                    <Typography variant="h4" color="primary" gutterBottom>
                                        {weather?.main.feelsLike}°C
                                    </Typography>

                                </div>
                                <div className={'flex flex-row flex-wrap gap-[10px] justify-end'}>

                                    <Typography variant="h5" color="primary">
                                        Maximum : {weather?.main.tempMax}°C
                                    </Typography>

                                    <Typography variant="h5" color="primary">
                                        Minimum : {weather?.main.tempMin}°C
                                    </Typography>

                                </div>

                            </div>

                        </div>
                    </CardContent>
                </Card>
                : <Skeleton variant="rectangular" className={'w-full !h-[calc(100%-30px)] m-[15px]'}/>
            }

        </>
    );
}

export default CurrentWeather;