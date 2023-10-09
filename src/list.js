import { useState } from "react";

const List = () => {
  const [students, setstudents] = useState([
    {
      name: "rohith",
      age: "13"
    },
    {
      name: "sachin",
      age: "21"
    }
  ]);
  const deleteHandler = (index) => {
    const filteredarr = [...students].splice(index, 1);
    setstudents(filteredarr);
  };
  return (
    <div>
      <hr />
      <ul>
        {students.map((student, index) => (
          <div key={index}>
            <li>{student.name}</li>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default List;
