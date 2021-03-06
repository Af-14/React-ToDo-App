import "./App.css";

import * as React from "react";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <Input name="Name" value={name} onChange={changeName} />
      <Input name="Age" value={age} onChange={changeAge} />
      <Select name="Favourite Color" value={color} onChange={changeColor} />
    </div>
    
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="pa-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <><div className="pa-16">
      <label>{name}</label>
      <select value={value} onSelect={onChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="pink">Pink</option>
        <option value="grey">Grey</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
    </div>
    
    <div>
        <button type="submit" className="primary full-width">
                Submit
              </button>
              <button className="secondary full-width">
                Clear
              </button>
      </div></>
  );
};


