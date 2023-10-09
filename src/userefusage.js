import { useEffect, useRef, useState } from "react";

const UserefUsage = () => {
  const nameRef = useRef(null);
  const [inputvalue, setinputvalue] = useState("");
  const ClickHandler = () => {
    const userinput = nameRef.current.value;
    setinputvalue(userinput);
  };

  return (
    <>
      <label>Name:- </label>
      <input
        type="text"
        placeholder="Enter Name"
        ref={nameRef}
        onChange={ClickHandler}
        required
      />
      <div>{inputvalue}</div>
    </>
  );
};
export default UserefUsage;
