


export class Weather {
    private _id: number;
    private _main: string;
    private _description: string;
    private _icon: string;

    constructor(id: number, main: string, description: string, icon: string) {
        this._id = id;
        this._main = main;
        this._description = description;
        this._icon = icon;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get main(): string {
        return this._main;
    }

    set main(value: string) {
        this._main = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }
}
