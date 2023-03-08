import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
function Note() {
  return (
    <div className='note'>
        <span> My First Note </span>
        <div className='note-footer'>
            <small>20/08/2022</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note