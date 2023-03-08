import React, { useState } from "react";

const Adddata = ({updatenote}) =>{

    const [Text,setText] = useState('');

    const update = (event) =>{
        setText(event.target.value);
    };
     
    const saveclick = () =>{
        if(Text.trim().length > 0)
        {
            updatenote(Text);
            setText('');
        }
        
    }
  return (
    <div className="note data">
      <textarea 
            rows="8" 
            cols="10" 
            placeholder="Type to add a note" 
            onChange={update}
        ></textarea>
        <div className="note-footer">
            <small>2000 Words Remaining</small>
            <button className="save" onClick={saveclick}>Save</button>
        </div>
    </div>
  );
}

export default Adddata;
