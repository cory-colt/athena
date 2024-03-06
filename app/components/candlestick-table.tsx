import * as fsPromise from 'fs/promises';
import Table from 'react-bootstrap/Table';
import { CandleStickModel } from '../models/candlestick.model';

const file = await fsPromise.open('./app/data/market-data-sample.txt', 'r');
const rawCandles: CandleStickModel[] = [];

// read in the raw candlestick data from the text file
var index = 1;
for await (const line of file.readLines()) {
    var split = line.split(',', 6);
    
    rawCandles.push(
        new CandleStickModel(
            index, 
            new Date(split[0]), 
            parseFloat(split[1]), 
            parseFloat(split[2]), 
            parseFloat(split[3]), 
            parseFloat(split[4]), 
            parseFloat(split[5])
        )
    );

    index++;
}

const doSomething = (candles: CandleStickModel[]) => {
    console.log(candles.length);
}

doSomething(rawCandles);

const listCandles = rawCandles.map(candle => 
    <tr key={candle.id.toString()}>
        <td>{candle.date.toString()}</td>
        <td>{candle.open.toFixed(2)}</td>
        <td>{candle.high.toFixed(2)}</td>
        <td>{candle.low.toFixed(2)}</td>
        <td>{candle.close.toFixed(2)}</td>
        <td>{candle.volume.toFixed(2)}</td>
        <td>TBD</td>
        <td>TBD</td>
    </tr>
);

export function CandleStickTable() {
    return (
        <>
        <h3>Candles: {rawCandles.length}</h3>

        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                    <th>20 EMA</th>
                    <th>Price Change (%)</th>
                </tr>
            </thead>
            <tbody>
                {listCandles}
            </tbody>
        </Table>
        </>
    )
}

export default CandleStickTable;