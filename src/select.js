import { useState } from "react";

const Select = () => {
  const [selectcities, setselectedcities] = useState("");
  const [selectstate, setselectedstate] = useState("");

  const countries = [
    {
      name: "karnataka",
      cities: ["bengaluru", "mysore", "belagavi"]
    },
    {
      name: "andhra pradesh",
      cities: ["hyderabad", "chitoor", "tirupati"]
    }
  ];
  return (
    <div>
      <h1>Tasks</h1>
      <select onChange={(e) => setselectedstate(e.target.value)}>
        <option value="">select state</option>
        {countries.map((state, index) => (
          <option value={state.name}>{state.name}</option>
        ))}
      </select>

      <select onChange={(e) => setselectedcities(e.target.value)}>
        <option value="">select cities</option>
        {selectstate &&
          countries.map((state, index) =>
            state.name === selectstate
              ? state.cities.map((city, cityindex) => (
                  <option key={cityindex} value={city}>
                    {city}
                  </option>
                ))
              : null
          )}
      </select>

      <div>
        <br />
        <div>selected state:- {selectstate}</div>
        <br />
        <div>selected city:- {selectcities}</div>
      </div>
    </div>
  );
};
export default Select;
