import Student from "./Student";

function App() {
  const student1 = {
    name: "Arun",
    age: 21,
    course: "React JS"
  };

  const student2 = {
    name: "Kumar",
    age: 22,
    course: "Java"
  };

  const student3 = {
    name: "Priya",
    age: 20,
    course: "Python"
  };

  return (
    <div>
      <h1>Student Details</h1>

      <Student
        name={student1.name}
        age={student1.age}
        course={student1.course}
      />

      <Student
        name={student2.name}
        age={student2.age}
        course={student2.course}
      />

      <Student
        name={student3.name}
        age={student3.age}
        course={student3.course}
      />
    </div>
  );
}

export default App;