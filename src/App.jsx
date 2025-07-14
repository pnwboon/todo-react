import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import TodoList from "./components/TodoList";
import AddList from "./components/AddList";

function App() {
  const [data, setData] = useState([
    { id: 1, target: "กวาดบ้าน" },
    { id: 2, target: "ถูบ้าน" },
    { id: 3, target: "ล้างจาน" },
    { id: 4, target: "ทำการบ้านคณิตศาสตร์" },
    { id: 5, target: "ทำการบ้านภาษาไทย" },
  ]);

  function deleteTarget(id) {
    const result = data.filter((target) => target.id !== id)
    setData(result)
  }

  return (
    <div className="App">
          <Header />
        <Container>
          <AddList data={data} setData={setData} />
          <TodoList data={data} deleteTarget={deleteTarget} />
        </Container>
    </div>
  );
}

export default App;
