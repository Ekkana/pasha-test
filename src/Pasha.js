import { useState } from "react";

const Pasha = () => {
  const [name, setName] = useState("Pasha");
  const [count, setCount] = useState(576);

  return (
    <div>
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Pasha;
