import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(true)}>
        Show
      </button>

      <button onClick={() => setShowText(false)}>
        Hide
      </button>

      {showText && <h2>Welcome to React</h2>}
    </div>
  );
}

export default App;