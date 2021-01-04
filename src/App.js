import { useEffect, useState } from "react";
import { Table } from "./components/Table/Table";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Form/Input/Input";
import { Label } from "./components/Form/Label/Label";
import "./App.scss";

// Pet table needs petsData[0] for empty table to properly render <thead>
const blankPetData = [
  {
    id: 0,
    name: "",
    tag: "",
  },
];

function App() {
  const [petsData, setPetsData] = useState(blankPetData);

  const fetchPetsData = () => {
    fetch("http://localhost:3001/pets")
      .then((res) => res.json())
      .then((data) => setPetsData(data))
      .catch((err) => setPetsData(blankPetData));
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  return (
    <div className="App">
      <Form>
        <Label />
        <Input />
      </Form>
      <Table tdata={petsData} />
    </div>
  );
}

export default App;
