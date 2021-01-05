import { useEffect, useState, useReducer } from "react";
import { Table } from "../components/Table/Table";
import { Form } from "../components/Form/Form";
import { Fieldset } from "../components/Form/Fieldset/Fieldset";
import { Legend } from "../components/Form/Fieldset/Legend/Legend";
import { Input } from "../components/Form/Input/Input";
import { Label } from "../components/Form/Label/Label";
import "./View.scss";

const ID = "id";
const NAME = "name";
const TAG = "tag";
const URL = "http://localhost:3001/pets";

const initialObject = {
  [ID]: 0,
  [NAME]: "",
  [TAG]: "",
};

const reducer = (state, payload) => {
  switch (Object.keys(payload)[0]) {
    case "reset":
      return { ...payload };
    case NAME:
    case TAG:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export const View = () => {
  const [formData, dispatch] = useReducer(reducer, initialObject);
  const [petsData, setPetsData] = useState([initialObject]);

  const getPetsData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPetsData(data))
      .catch((err) => setPetsData([initialObject]));
  };

  const postPetsData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...formData }),
    };
    fetch(URL, requestOptions)
      .then((res) => res.json())
      .then(() => getPetsData());
  };

  useEffect(() => {
    getPetsData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postPetsData();
  };

  return (
    <div className="View">
      <Form handleSubmit={handleSubmit}>
        <Fieldset>
          <Legend title="Pet Details" />
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
        </Fieldset>
        <Input type="submit" name="Submit" value="Submit" />
      </Form>
      <Table tdata={petsData} />
    </div>
  );
};

export default View;
