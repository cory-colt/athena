'use client'

const user = {
    firstName: 'john', 
    lastName: 'doe', 
    email: 'johndoe@testing.com'
}

const candles = [
    { id: 1, open: 1234, high: 4321, low: 200, close: 100 },
    { id: 2, open: 1234, high: 5001, low: 200, close: 100 },
    { id: 3, open: 1234, high: 4789, low: 200, close: 100 }
]

const listCandles = candles.map(candle => 
    <li key={candle.id}>{candle.high}</li>
)

export function Sandbox() {
    function handleDoSomething() {
        console.log('doSomething() - clicked');
    }

    return (
        <>
        <p>This is from the sandbox {user.firstName} {user.lastName}</p>

        <h3>Candles:</h3>

        <ul>
            {listCandles}
        </ul>

        <button onClick={handleDoSomething}>Click Me</button>
        </>
    )
}

export default Sandbox;