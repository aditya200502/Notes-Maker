import React, { useState } from "react";
import { nanoid } from "nanoid";
import List from "./components/List";

function App() {
  const [Data, setData] = useState([
    {
      id: nanoid(),
      text: "My first note",
      date: "20/08/2022",
    },
    {
      id: nanoid(),
      text: "My second note",
      date: "21/10/2022",
    },
    {
      id: nanoid(),
      text: "My third note",
      date: "23/12/2022",
    },
  ]);
  return (
    <div className="container">
      <List notes={Data}/>
    </div>
  );
}

export default App;
