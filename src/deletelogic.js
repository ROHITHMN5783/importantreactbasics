import { useState } from "react";

const Deletelogic = () => {
  const [cities, setcities] = useState([
    { id: 1, name: "bengaluru", age: "1000" },
    { id: 2, name: "hyderabad", age: "2000" },
    {
      id: 3,
      name: "hyderabadcfffffv ",
      age: "5000"
    }
  ]);
  const DeleteHandler = (index) => {
    const filteredarray = cities.filter((city, i) => i !== index);
    setcities(filteredarray);
  };
  return (
    <div>
      <ul>
        {cities.map((city, index) => (
          <div key={index}>
            <li>{city.name}</li>

            <li>{city.age}</li>
            <button onClick={() => DeleteHandler(index)}>Delete</button>
            <br />
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Deletelogic;
