import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
    const [functionCode, setFunctionCode] = useState(`const n: number = parseInt(input());
console.log(n * n);`);
    const [inputData, setInputData] = useState('');
    const [result, setResult] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');
    const [inputDisplay, setInputDisplay] = useState('');

    const sendRequest = async () => {
        try {
            const response = await fetch('/api/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputData, functionCode }),
            });
            const data = await response.json();
            if (data.error) {
                setError(`Error: ${data.error}`);
            } else {
                setInputDisplay(`Input:\n${data.inputData}`);
                setResult(`Result:\n${data.result}`);
                setTime(`Time: ${(data.process_time / 1000).toFixed(3)} sec`);
                setError('');
            }
        } catch (error) {
            console.error('Error:', error);
            setError(`Error: ${error}`);
        }
    };

    return (
        <div>
            <Head>
                <title>TypeScript Run Time Calculator</title>
            </Head>
            <h1>TypeScript Run Time Calculator</h1>
            <p>Define your function:</p>
            <textarea
                value={functionCode}
                onChange={(e) => setFunctionCode(e.target.value)}
                rows={10}
                cols={50}
            />
            <p>Enter your input (multiple lines allowed):</p>
            <textarea
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                rows={5}
                cols={50}
                placeholder="Enter input data"
            />
            <button onClick={sendRequest}>Calculate</button>
            <br /><br />
            <div>{inputDisplay}</div>
            <div>{result}</div>
            <div>{time}</div>
            <div style={{ color: 'red' }}>{error}</div>
        </div>
    );
}
