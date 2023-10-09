import { useState } from "react";

const Promiseuse = () => {
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);
  const handleSubmission = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setdata(json));
  };
  return (
    <>
      <button onClick={handleSubmission}>Fetch data</button>
      {data && (
        <>
          <div>fetched data</div>
          <div>id:-{data.id}</div>
          <div>completed:-{data.completed}</div>
          <div>title:-{data.title}</div>
        </>
      )}
    </>
  );
};
export default Promiseuse;
