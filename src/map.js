import React, { useState } from "react";

const Map = () => {
  const [clickbutton, setclickbutton] = useState(false);
  const [students, setstudents] = useState([
    {
      id: 1,
      name: "rohith",
      car: "benz"
    },
    {
      id: 2,
      name: "prasanna",
      car: "tesla"
    }
  ]);

  const buttonHandler = () => {
    setclickbutton((prev) => !prev);
  };
  const deleteHandler = (index) => {
    const filteredarray = students.filter((student) => student.id !== index);
    setstudents(filteredarray);
  };

  return (
    <div>
      {clickbutton ? (
        <ul>
          {students.map((student, index) => (
            <div key={index}>
              <li>{student.name}</li>
              <li>{student.car}</li>
              <button onClick={() => deleteHandler(student.id)}>delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <h1>hello no elements</h1>
      )}
      <button onClick={buttonHandler}>Click me</button>
    </div>
  );
};

export default Map;
