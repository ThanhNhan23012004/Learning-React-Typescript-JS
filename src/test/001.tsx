import { useState, useMemo, useCallback } from "react";
import { Form001 } from "../components/Form-001";

export default function Test001() {
    const [count, setCount] = useState(0);
    const [total] = useState(30);

    function calculateFibonacci(n: number): number {
        if (n <= 1) return n;
        return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    };

    console.time("fibonacci");
    const result = useMemo(() => calculateFibonacci(40), []);
    console.log(result);
    console.timeEnd("fibonacci");

    const submitForm = useCallback(() => {
        console.log("Submit form");
    }, []);

    return (
        <>
            <p>Test 001</p>
            <p>Fibonacci: {calculateFibonacci(40)}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <Form001 total={total} submitForm={submitForm} />
        </>
    )
}