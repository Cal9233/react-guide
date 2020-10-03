import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    persons: [
      { name: "Cal", age: 24 },
      { name: "Sean", age: 28 },
      { name: "Nick", age: 26 },
    ],
  });

  const switchNameHandler = () => {
    setPerson({
      persons: [
        {
          name: "Calvin",
          age: 20,
        },
        { name: "SEAN", age: 27 },
        { name: "Nicholas", age: 25 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch</button>
      <Person name={person.persons[0].name} age={person.persons[0].age} />
      <Person name={person.persons[1].name} age={person.persons[1].age} />
      <Person name={person.persons[2].name} age={person.persons[2].age} />
    </div>
  );
}

export default App;
