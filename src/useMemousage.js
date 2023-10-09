import { useMemo, useState } from "react";

const UseMemoUsage = () => {
  const [data, setdata] = useState("");
  const first = 15;
  const last = 28;
  const sum = useMemo(() => first + last, [first, last]);

  const Handleclick = () => {
    setdata(sum);
  };
  return (
    <>
      <button onClick={Handleclick}>Click</button>
      <div>{data}</div>
    </>
  );
};
export default UseMemoUsage;
