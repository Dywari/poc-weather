export class Coord {
    private _lon: number;
    private _lat: number;

    constructor(lon: number, lat: number) {
        this._lon = lon;
        this._lat = lat;
    }


    get lon(): number {
        return this._lon;
    }

    set lon(value: number) {
        this._lon = value;
    }

    get lat(): number {
        return this._lat;
    }

    set lat(value: number) {
        this._lat = value;
    }
}