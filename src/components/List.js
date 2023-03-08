import React from "react";
import Note from "./Note";

function List({ notes }) {
  return (
    <div className="list">
      {notes.map((note) => (
        <Note id = {note.id} text = {note.text} date = {note.date}/>
      ))}
    </div>
  );
}

export default List;
