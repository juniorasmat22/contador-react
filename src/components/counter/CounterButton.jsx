

export default function CounterButton({ by, incrementParentFunction }) {
    // const [count, setCount] = useState(0);
    function incrementFunction() {
        // setCount(count + by);
        incrementParentFunction(by);
    }
    function decrementFunction() {
        // setCount(count - by);
        incrementParentFunction(-by);
    }
    return (
        <div className="flex space-x-4 py-2">
            <button
                onClick={decrementFunction}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
            >
                −{by}
            </button>
            <button
                onClick={incrementFunction}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
                +{by}
            </button>
        </div>
    );
}