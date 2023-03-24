export class Vector {
    constructor(private _x: number = 0, private _y: number = 0) {}

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

    get y(): number {
        return this._y;
    }

    public add(v: Vector): Vector {
       return new Vector(this.x + v.x, this.y + v.y);
    }

    public addTo(v: Vector): void {
        this.x += v.x;
        this.y += v.y;
    }

    public getAngleRadians(): number {
        return Math.atan2(this.y, this.x);
    }

    public getAngleDegrees() {
        return this.getAngleRadians() * 180 / Math.PI;
    }

    public setAngle(angle: number) {
        const length: number = this.getLength();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }

    public getLength(): number {
        return Math.sqrt(this.x**2 + this.y**2);
    }

    public setLength(length: number) {
        const angle = this.getAngleRadians();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }

    public reset() {
        this.x = 0;
        this.y = 0;
    }
}