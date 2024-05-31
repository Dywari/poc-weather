import {Card, CardContent, Skeleton, Typography} from "@mui/material";
import {CurrentWeatherProps} from "./CurrentWeather";
import {AirSharp, Speed, VisibilitySharp, WaterDropSharp} from "@mui/icons-material";


export interface viewBag {
    title: string | null;
    data: number | string | null;
    unit: string | null;
    icon: any
}

export function CurrentMetric({weather}: CurrentWeatherProps) {
    const cardPressure: viewBag = {
        title: 'Pression',
        data: weather?.main?.pressure ?? null,
        unit: 'mbar',
        icon: <Speed className={'text-8xl !h-[100px] !w-[100px]'} color="primary"/>
    };

    const cardWind: viewBag = {
        title: 'Vent max.',
        data: weather?.wind.speed ?? null,
        unit: 'hm/h',
        icon: <AirSharp className={'text-8xl !h-[100px] !w-[100px]'} color="primary"/>
    };

    const cardHumidity: viewBag = {
        title: 'Humidité',
        data: weather ? weather?.main.humidity.toString() + '%' : null,
        unit: null,
        icon: <WaterDropSharp className={'text-8xl !h-[100px] !w-[100px]'} color="primary"/>
    };

    const cardVisibility: viewBag = {
        title: 'Visibilité',
        data: weather?.visibility ?? null,
        unit: 'km',
        icon: <VisibilitySharp className={'text-8xl !h-[100px] !w-[100px]'} color="primary"/>
    };


    const card = (viewBag: viewBag) => {
        return (
            (viewBag.data ?
                <Card className={'w-[275px] m-[15px]'}>
                    <CardContent className={'w-full h-full bg-slate-800'}>
                        <div className={'w-full h-full flex flex-row flex-1 items-center'}>
                            <div className={'flex flex-[50%] flex-col'}>
                                <Typography variant="h5" color="primary.light" gutterBottom>
                                    {viewBag.title}
                                </Typography>
                                <Typography variant="h3" color="primary.light">
                                    {viewBag.data}
                                </Typography>
                                <Typography variant="h6" color="primary.light" gutterBottom>
                                    {viewBag.unit}
                                </Typography>
                            </div>
                            <div className={'flex flex-[50%] justify-center'}>
                                {viewBag.icon}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                : <Skeleton variant="rectangular" className={'w-[275px] !h-[232px] m-[15px]'}/>)
        );
    }

    return (
        <section className={"flex w-full flex-row flex-wrap justify-center"}>
            {card(cardPressure)}
            {card(cardWind)}
            {card(cardHumidity)}
            {card(cardVisibility)}
        </section>);

}

export default CurrentMetric;