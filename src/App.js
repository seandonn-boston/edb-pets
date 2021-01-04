import { useEffect, useState, useReducer } from "react";
import { Table } from "./components/Table/Table";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Form/Input/Input";
import { Label } from "./components/Form/Label/Label";
import "./App.scss";

const ID = "id";
const NAME = "name";
const TAG = "tag";

const initialObject = {
  [ID]: 0,
  [NAME]: "",
  [TAG]: "",
};

const reducer = (state, payload) => {
  switch (Object.keys(payload)[0]) {
    case ID:
    case NAME:
    case TAG:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

function App() {
  const [formData, dispatch] = useReducer(reducer, initialObject);
  const [petsData, setPetsData] = useState([initialObject]);

  const fetchPetsData = () => {
    fetch("http://localhost:3001/pets")
      .then((res) => res.json())
      .then((data) => setPetsData(data))
      .catch((err) => setPetsData([[initialObject]]));
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  return (
    <div className="App">
      <Form>
        <Label htmlFor={NAME} title="Pet Name" />
        <Input
          type="text"
          name={NAME}
          value={formData[`${NAME}`]}
          handleChange={handleChange}
          placeholder="Max"
        />
        <Label htmlFor={TAG} title="Tag" />
        <Input
          type="text"
          name={TAG}
          value={formData[`${TAG}`]}
          handleChange={handleChange}
          placeholder="Tag"
        />
      </Form>
      <Table tdata={petsData} />
    </div>
  );
}

export default App;
