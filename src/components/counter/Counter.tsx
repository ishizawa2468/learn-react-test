import { useState } from "react";
import { useCounter } from "../../hooks/userCount";

function Counter() {
  const [amount, setAmount] = useState(0);
  const { count, increment, decrement } = useCounter({ initialCount: 0 });

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => increment()}>Increment</button>
      </div>
      <div>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        {/* <button onClick={() => setCount(amount)}>Set</button> */}
      </div>
    </>
  );
}

export default Counter;
