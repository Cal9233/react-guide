import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

function App() {
  const [person, setPerson] = useState(
    {
      persons: [
        { name: "Cal", age: 24 },
        { name: "Sean", age: 28 },
        { name: "Nick", age: 26 },
      ],
    },
    showPerson(false)
  );

  const switchNameHandler = (newName) => {
    setPerson({
      persons: [
        { name: newName, age: 20 },
        { name: "SEEEEN", age: 27 },
        { name: "Nicholas", age: 25 },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPerson({
      persons: [
        { name: event.target.value, age: 20 },
        { name: "SEAN", age: 27 },
        { name: "Nicholas", age: 26 },
      ],
    });
  };

const togglePerson = () => {
  const doesShow;

}

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1x solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>I'm a React App</h1>
      <button style={style} onClick={switchNameHandler}>
        Switch
      </button>
      {showPerson === true ? (
        <div>
          <Person name={person.persons[1].name} age={person.persons[1].age} />
          <Person
            name={person.persons[0].name}
            age={person.persons[0].age}
            click={switchNameHandler.bind(this, "CAL!")}
            changed={nameChangedHandler}
          >
            Hobbies: Fighting
          </Person>
          <Person name={person.persons[2].name} age={person.persons[2].age} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
