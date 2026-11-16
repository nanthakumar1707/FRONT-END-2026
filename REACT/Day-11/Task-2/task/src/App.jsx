import { useEffect, useState } from "react";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending"
  });

  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  // GET - Fetch existing tasks
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const formattedTasks = data.slice(0, 10).map((task) => ({
          id: task.id,
          title: task.title,
          description: "Task description",
          status: task.completed ? "Completed" : "Pending"
        }));

        setTasks(formattedTasks);
      })
      .catch((error) => {
        console.log("Error fetching tasks:", error);
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // POST - Add new task
  const addTask = (e) => {
    e.preventDefault();

    if (
      formData.title === "" ||
      formData.description === "" ||
      formData.status === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        status: formData.status
      })
    })
      .then((response) => response.json())
      .then((newTask) => {
        const task = {
          ...newTask,
          id: Date.now()
        };

        setTasks([...tasks, task]);

        setFormData({
          title: "",
          description: "",
          status: "Pending"
        });
      })
      .catch((error) => {
        console.log("Error adding task:", error);
      });
  };

  // PUT - Update existing task
  const updateTask = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: editId,
        title: formData.title,
        description: formData.description,
        status: formData.status
      })
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        setTasks(
          tasks.map((task) =>
            task.id === editId
              ? {
                  ...task,
                  title: updatedTask.title,
                  description: updatedTask.description,
                  status: updatedTask.status
                }
              : task
          )
        );

        setEditId(null);

        setFormData({
          title: "",
          description: "",
          status: "Pending"
        });
      })
      .catch((error) => {
        console.log("Error updating task:", error);
      });
  };

  // Edit button
  const handleEdit = (task) => {
    setEditId(task.id);

    setFormData({
      title: task.title,
      description: task.description,
      status: task.status
    });
  };

  // DELETE - Remove task
  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.log("Error deleting task:", error);
      });
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditId(null);

    setFormData({
      title: "",
      description: "",
      status: "Pending"
    });
  };

  return (
    <div>
      <h1>Task Management Application</h1>

      {/* Form */}
      <form onSubmit={editId === null ? addTask : updateTask}>
        <div>
          <label>Task Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </div>

        <br />

        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter task description"
          ></textarea>
        </div>

        <br />

        <div>
          <label>Status: </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <br />

        <button type="submit">
          {editId === null ? "Add Task" : "Update Task"}
        </button>

        {editId !== null && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <hr />

      {/* Task List */}
      <h2>Task List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>

              <td>
                <button onClick={() => handleEdit(task)}>
                  Edit
                </button>

                <button onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;