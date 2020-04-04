export class BaseError extends Error {
    // tslint:disable-next-line:variable-name
    protected _type: any;
    public custom: boolean;
    
    constructor(message: string, type: any) {
        super(message);
        this._type = type;
        this.custom = true;
        Object.setPrototypeOf(this, BaseError.prototype);
    }
    
    public get type(): any {
        return this._type;
    }
}
