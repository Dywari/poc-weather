export class City {
    private _name: string;
    private _lat: number;
    private _lon: number;
    private _country: string;

    static emptyCity():City {
        return new City('', 0, 0, '')
    }


    constructor(name: string, lat: number, lon: number, country: string) {
        this._name = name;
        this._lat = lat;
        this._lon = lon;
        this._country = country;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lat(): number {
        return this._lat;
    }

    set lat(value: number) {
        this._lat = value;
    }

    get lon(): number {
        return this._lon;
    }

    set lon(value: number) {
        this._lon = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }
}

export default City;