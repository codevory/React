

interface CounterProps {
    value: number;
    increment: () => void;
    decrement: () => void;
}

const Counter = ({ value, increment, decrement }: CounterProps) => {
    return (
        <div>
            <h3>{value}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;