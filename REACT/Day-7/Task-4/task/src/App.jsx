import { useState } from "react";

function App() {
  const [marks, setMarks] = useState(35);

  return (
    <div>
      <h1>Marks: {marks}</h1>

      <button onClick={() => setMarks(marks + 1)}>
        Increase Marks
      </button>

      <h2>
        {marks >= 40 ? "Pass" : "Fail"}
      </h2>
    </div>
  );
}

export default App;