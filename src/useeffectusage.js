import { useEffect, useState } from "react";

const UseeffectUsage = () => {
  const [data, setdata] = useState("");
  const handClick = () => {
    fetch("https://crudcrud.com/api/1689dc624f424cf3ac8077425a252e11/1")
      .then((res) => res.json())
      .then((json) => setdata(json));
  };
  useEffect(() => {
    handClick();
  }, [data]);
  return (
    <>
      <div>
        <br />
        Data:- Rohith M N<div>{data.id}</div>
        <div>{data.title}</div>
      </div>
    </>
  );
};
export default UseeffectUsage;
