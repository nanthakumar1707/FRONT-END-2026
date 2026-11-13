import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>
        {isLoggedIn ? "Welcome User" : "Please Login"}
      </h1>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;