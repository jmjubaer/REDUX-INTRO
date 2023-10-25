import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByValue } from "../redux/features/counter/CounterSlice";

const Counter = () => {
    const  {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <p className="fs-1">{count}</p>
            <button onClick={() => dispatch(increment())} className="btn btn-primary me-5">Increment</button>
            <button onClick={() => dispatch(decrement())} className="btn btn-primary">Decrement</button>
            <button onClick={() => dispatch(incrementByValue(5))} className="btn btn-success ms-5">Increment 5</button>
        </div>
    );
};

export default Counter;