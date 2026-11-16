function App() {
  const employees = [
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Priya", salary: 30000 },
    { id: 3, name: "Rahul", salary: 35000 },
    { id: 4, name: "Divya", salary: 40000 }
  ];

  return (
    <div>
      <h2>Employee Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>₹{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;