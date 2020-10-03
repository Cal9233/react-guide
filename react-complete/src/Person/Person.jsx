import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>
        I'm {props.name} and I am {props.age} years old!
      </h1>
    </div>
  );
};

export default Person;
