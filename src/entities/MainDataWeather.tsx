
export class MainDataWeather {
    private _temp: number;
    private _feelsLike: number;
    private _tempMin: number;
    private _tempMax: number;
    private _pressure: number;
    private _humidity: number;

    constructor(temp: number, feelsLike: number, tempMin: number, tempMax: number, pressure: number, humidity: number) {
        this._temp = temp;
        this._feelsLike = feelsLike;
        this._tempMin = tempMin;
        this._tempMax = tempMax;
        this._pressure = pressure;
        this._humidity = humidity;
    }

    get temp(): number {
        return this._temp;
    }

    set temp(value: number) {
        this._temp = value;
    }

    get feelsLike(): number {
        return this._feelsLike;
    }

    set feelsLike(value: number) {
        this._feelsLike = value;
    }

    get tempMin(): number {
        return this._tempMin;
    }

    set tempMin(value: number) {
        this._tempMin = value;
    }

    get tempMax(): number {
        return this._tempMax;
    }

    set tempMax(value: number) {
        this._tempMax = value;
    }

    get pressure(): number {
        return this._pressure;
    }

    set pressure(value: number) {
        this._pressure = value;
    }

    get humidity(): number {
        return this._humidity;
    }

    set humidity(value: number) {
        this._humidity = value;
    }
}
