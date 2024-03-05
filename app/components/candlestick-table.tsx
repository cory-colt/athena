import * as fsPromise from 'fs/promises';
import Table from 'react-bootstrap/Table';

const file = await fsPromise.open('./app/data/market-data-sample.txt', 'r');
const rawCandles = [];
for await (const line of file.readLines()) {
    var split = line.split(',', 6);
    
    rawCandles.push(
        {
            date: split[0], 
            open: split[1], 
            high: split[2], 
            low: split[3], 
            close: split[4], 
            volume: split[5]
        }
    );
}

const listCandles = rawCandles.map(candle => 
    <tr key={candle.date}>
        <td>{candle.date}</td>
        <td>{candle.open}</td>
        <td>{candle.high}</td>
        <td>{candle.low}</td>
        <td>{candle.close}</td>
        <td>{candle.volume}</td>
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