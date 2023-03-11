import { useState } from "react";

const Pasha = () => {
  const [name, setName] = useState("Pasha");
  return (
    <div>
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Pasha;
