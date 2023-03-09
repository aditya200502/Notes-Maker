import React from 'react'

const Top =({Darkmode}) => {
  return (
    <div className='header'>
        <h1>Notes-Maker</h1>
        <button onClick={() => 
            Darkmode((previousmode) => !previousmode
            )
        } 
        className='save'>Dark Mode</button>
    </div>
  )
}

export default Top