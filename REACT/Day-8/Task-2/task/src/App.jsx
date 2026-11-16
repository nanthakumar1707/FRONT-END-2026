function Languages() {
  const languages = ["HTML", "CSS", "JavaScript", "React", "Python"];

  return (
    <div>
      <h2>Programming Languages</h2>

      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;