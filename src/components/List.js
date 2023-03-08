import React from "react";
import Note from "./Note";
import Adddata from "./Adddata";
function List({ notes,updatenote }) {
  return (
    <div className="list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <Adddata updatenote={updatenote}/>
    </div>
  );
}

export default List;
