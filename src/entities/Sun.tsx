
export class Sun {
    private _type: number;
    private _id: number;
    private _country: string;
    private _sunrise: number;
    private _sunset: number;

    constructor(type: number, id: number, country: string, sunrise: number, sunset: number) {
        this._type = type;
        this._id = id;
        this._country = country;
        this._sunrise = sunrise;
        this._sunset = sunset;
    }


    get type(): number {
        return this._type;
    }

    set type(value: number) {
        this._type = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    get sunrise(): number {
        return this._sunrise;
    }

    set sunrise(value: number) {
        this._sunrise = value;
    }

    get sunset(): number {
        return this._sunset;
    }

    set sunset(value: number) {
        this._sunset = value;
    }
}