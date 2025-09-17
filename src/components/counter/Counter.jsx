import { useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementParentFunction(by) {
        setCount(count + by);
    }
    function decrementParentFunction(by) {
        setCount(count - by);
    }
    function resetFunction() {
        setCount(0);
    }
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg w-64 mx-auto">
            <span className="text-4xl font-bold text-gray-800 mb-4">{count}</span>
            <CounterButton by={1} incrementParentFunction={incrementParentFunction} />
            <CounterButton by={3} incrementParentFunction={incrementParentFunction} />
            <CounterButton by={100} incrementParentFunction={incrementParentFunction} />
            <CounterButton by={200} incrementParentFunction={incrementParentFunction} />
            <button
                onClick={resetFunction}
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-200"
            >
                Reset
            </button>

        </div>
    );
}