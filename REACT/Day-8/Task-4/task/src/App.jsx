import Student from "./Student";

function App() {
  const name = "Kumar";
  const age = 22;
  const course = "React JS";

  return (
    <div>
      <Student name={name} age={age} course={course} />
    </div>
  );
}

export default App;