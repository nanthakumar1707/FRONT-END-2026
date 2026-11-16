
import { useState } from "react";

function App() {
  const [page, setPage] = useState("register");

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Register
  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !registerData.name ||
      !registerData.email ||
      !registerData.phone ||
      !registerData.username ||
      !registerData.password
    ) {
      setError("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(registerData));

    setError("");
    alert("Registration Successful!");

    setPage("login");
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No registered user found");
      return;
    }

    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {
      setUser(savedUser);
      setError("");
      setPage("dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  // Logout
  const handleLogout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <div>
      {/* REGISTER */}
      {page === "register" && (
        <div>
          <h1>Register</h1>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  name: e.target.value
                })
              }
            />

            <br /><br />

            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  email: e.target.value
                })
              }
            />

            <br /><br />

            <input
              type="text"
              placeholder="Phone Number"
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  phone: e.target.value
                })
              }
            />

            <br /><br />

            <input
              type="text"
              placeholder="Username"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  username: e.target.value
                })
              }
            />

            <br /><br />

            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  password: e.target.value
                })
              }
            />

            <br /><br />

            <button type="submit">
              Register
            </button>
          </form>

          <p>{error}</p>

          <button onClick={() => setPage("login")}>
            Already have an account? Login
          </button>
        </div>
      )}

      {/* LOGIN */}
      {page === "login" && (
        <div>
          <h1>Login</h1>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value
                })
              }
            />

            <br /><br />

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value
                })
              }
            />

            <br /><br />

            <button type="submit">
              Login
            </button>
          </form>

          <p>{error}</p>

          <button onClick={() => setPage("register")}>
            Create Account
          </button>
        </div>
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && user && (
        <div>
          <h1>Dashboard</h1>

          <h2>Welcome, {user.name}!</h2>

          <h3>User Details</h3>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Username:</strong> {user.username}
          </p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;