import React, { useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react';
const AddNote = () => {

    const context = useContext(noteContext)
    const {addNote}=context;

    const [note, setnote] = useState({"title":"","description":"","tag":"default"})

   const handleChange =(e)=>{
    e.preventDefault();
     addNote(note.title,note.description,note.tag);
   }

   const onChange =(e)=>{
     setnote({...note,[e.target.name]:e.target.value})
   }

  return (
    <div>
     <div className='container my-3'>
      <h1>Add Note here</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleChange}>Add Note</button>
</form>
    </div>
    </div>
  )
}

export default AddNote