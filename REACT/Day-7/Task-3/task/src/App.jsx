import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Number: {number}</h1>

      <button onClick={() => setNumber(number + 1)}>
        Increment
      </button>

      <h2>
        {number % 2 === 0 ? "Even Number" : "Odd Number"}
      </h2>
    </div>
  );
}

export default App;