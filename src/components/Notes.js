import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
const Notes = () => {
    const context = useContext(noteContext)
    const {notes,addNote}=context;

  return (
    <>
      <AddNote/>
    <div className='row my-3'>
      <h1>Yours notes</h1>

      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/> 
      })}
      </div>
      </>
  )
}

export default Notes