import React, { useState } from "react";
import { nanoid } from "nanoid";
import List from "./components/List";
import Search from "./components/Search";
import Top from "./components/Top";

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

  const [searching,setsearching] = useState('');

  const[dark,setdark] = useState(false);

  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...Data,newNote];
    setData(newNotes);
    // console.log(text);
  }

  //Delete note function :-
  const deletenote = (id) => {

    const newdata = Data.filter((curdata) => curdata.id !== id);
    setData(newdata)
  }
  return (

    <div className={`${dark && 'dark-mode'}`}>

      <div className="container">
        <Top Darkmode={setdark}/>
        <Search searchdata={setsearching}/>
        <List 
          notes={Data.filter((curdata) =>
          curdata.text.toLowerCase().includes(searching)
          )} 
          updatenote={addnote}
          deletenote={deletenote}
        />
      </div>
    </div>
   
  );
}

export default App;
