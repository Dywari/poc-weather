import {Weather} from "./Weather";
import {Wind} from "./Wind";
import {Clouds} from "./Cloud";
import {Sun} from "./Sun";
import {MainDataWeather} from "./MainDataWeather";
import {Coord} from "./Coord";

export class WeatherFull {
    private _coord: Coord;
    private _weather: Weather[];
    private _base: string;
    private _main: MainDataWeather;
    private _visibility: number;
    private _wind: Wind;
    private _clouds: Clouds;
    private _dt: number;
    private _sun: Sun;
    private _timezone: number;
    private _id: number;
    private _name: string;
    private _cod: number;

    constructor(
        coord: Coord,
        weather: Weather[],
        base: string,
        main: MainDataWeather,
        visibility: number,
        wind: Wind,
        clouds: Clouds,
        dt: number,
        sun: Sun,
        timezone: number,
        id: number,
        name: string,
        cod: number
    ) {
        this._coord = coord;
        this._weather = weather;
        this._base = base;
        this._main = main;
        this._visibility = visibility;
        this._wind = wind;
        this._clouds = clouds;
        this._dt = dt;
        this._sun = sun;
        this._timezone = timezone;
        this._id = id;
        this._name = name;
        this._cod = cod;
    }

    static fromJson(json: any): WeatherFull {
        return new WeatherFull(
            new Coord(json.coord.lon, json.coord.lat),
            json.weather.map((w: any) => new Weather(w.id, w.main, w.description, w.icon)),
            json.base,
            new MainDataWeather(json.main.temp, json.main.feels_like, json.main.temp_min, json.main.temp_max, json.main.pressure, json.main.humidity),
            json.visibility,
            new Wind(json.wind.speed, json.wind.deg),
            new Clouds(json.clouds.all),
            json.dt,
            new Sun(json.sys.type, json.sys.id, json.sys.country, json.sys.sunrise, json.sys.sunset),
            json.timezone,
            json.id,
            json.name,
            json.cod
        );
    }


    get coord(): Coord {
        return this._coord;
    }

    set coord(value: Coord) {
        this._coord = value;
    }

    get weather(): Weather[] {
        return this._weather;
    }

    set weather(value: Weather[]) {
        this._weather = value;
    }

    get base(): string {
        return this._base;
    }

    set base(value: string) {
        this._base = value;
    }

    get main(): MainDataWeather {
        return this._main;
    }

    set main(value: MainDataWeather) {
        this._main = value;
    }

    get visibility(): number {
        return this._visibility;
    }

    set visibility(value: number) {
        this._visibility = value;
    }

    get wind(): Wind {
        return this._wind;
    }

    set wind(value: Wind) {
        this._wind = value;
    }

    get clouds(): Clouds {
        return this._clouds;
    }

    set clouds(value: Clouds) {
        this._clouds = value;
    }

    get dt(): number {
        return this._dt;
    }

    set dt(value: number) {
        this._dt = value;
    }

    get sys(): Sun {
        return this._sun;
    }

    set sys(value: Sun) {
        this._sun = value;
    }

    get timezone(): number {
        return this._timezone;
    }

    set timezone(value: number) {
        this._timezone = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get cod(): number {
        return this._cod;
    }

    set cod(value: number) {
        this._cod = value;
    }
}