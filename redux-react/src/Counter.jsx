import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/actions/action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter in Counter Component:{count}</h1>
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
