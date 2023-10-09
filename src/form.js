import { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  return (
    <div>
      <h1>Form</h1>
      <label>Name:- </label>
      <input
        type="text"
        placeholder="enter name"
        required
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <br />
      <label>Email:- </label>
      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Pass:- </label>
      <input
        type="password"
        placeholder="enter password"
        value={pass}
        onChange={(e) => setpass(e.target.value)}
        required
      />
      <br />
      <br />
      <button>Submit</button>
      <div>
        <li>{name}</li>
        <li>{email}</li>
        <li>{pass}</li>
      </div>
    </div>
  );
};
export default Form;
