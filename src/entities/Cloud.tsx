
export class Clouds {
    private _all: number;

    constructor(all: number) {
        this._all = all;
    }


    get all(): number {
        return this._all;
    }

    set all(value: number) {
        this._all = value;
    }
}
