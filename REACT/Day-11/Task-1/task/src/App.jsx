import { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: ""
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // GET existing users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch(() => {
        setError("Failed to fetch users");
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form validation
  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.username
    ) {
      setError("All fields are required");
      return false;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return false;
    }

    if (formData.phone.length < 10) {
      setError("Phone number must contain at least 10 digits");
      return false;
    }

    setError("");
    return true;
  };

  // POST new user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((newUser) => {
        // Add the new user to the table
        setUsers([...users, newUser]);

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          username: ""
        });

        setError("");
      })
      .catch(() => {
        setError("Registration failed");
      });
  };

  return (
    <div>
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>

      <p>{error}</p>

      <hr />

      <h2>Registered Users</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;