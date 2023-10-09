import { useState } from "react";

const FormTwo = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    pass: ""
  });

  return (
    <>
      <div>
        <h1>New Form</h1>
        <label>Name:- </label>
        <input
          type="text"
          placeholder="enter name"
          required
          value={form.name}
          onChange={(e) => setform({ ...form, name: e.target.value })}
        />
        <br />
        <br />
        <label>Email:- </label>
        <input
          type="email"
          placeholder="enter email"
          value={form.email}
          onChange={(e) => setform({ ...form, email: e.target.value })}
          required
        />
        <br />
        <br />
        <label>Pass:- </label>
        <input
          type="password"
          placeholder="enter password"
          value={form.pass}
          onChange={(e) => setform({ ...form, pass: e.target.value })}
          required
        />
        <br />
        <br />
        <button>Submit</button>
        <div>
          <li>{form.name}</li>
          <li>{form.email}</li>
          <li>{form.pass}</li>
        </div>
      </div>
    </>
  );
};
export default FormTwo;
