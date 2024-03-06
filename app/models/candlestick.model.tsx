export class CandleStickModel {
    id: Number;
    date: Date;
    open: Number;
    high: Number;
    low: Number;
    close: Number;
    volume: Number;

    constructor (id: Number, date: Date, open: Number, high: Number, low: Number, close: Number, volume: Number) {
        this.id = id;
        this.date = date;
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
    }
}