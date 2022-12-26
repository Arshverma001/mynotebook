import React, { useEffect,useRef,useContext,useState } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes = () => {
  const [note, setnote] = useState({"title":"","description":"","tag":"default"})
    const context = useContext(noteContext)
    const {notes,getNotes}=context;
    const ref=useRef(null)

    useEffect(()=>{
      getNotes()
      // eslint-disable-next-line
    },[])

    const updateNote=(note)=>{
      ref.current.click()
    }
    const handleChange =(e)=>{
      e.preventDefault();
      
     }
  
     const onChange =(e)=>{
       setnote({...note,[e.target.name]:e.target.value})
     }

  return (
    <>
      <AddNote/>

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="etag" className="form-label">tag</label>
    <input type="text" className="form-control" id="etag" name='etag' onChange={onChange}/>
  </div>
  
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Update Changes</button>
      </div>
    </div>
  </div>
</div>

    <div className='row my-3'>
      <h1>Yours notes</h1>

      {notes.map((note)=>{
        return <Noteitem key={note._id}  updateNote={updateNote}  note={note}/> 
      })}
      </div>
      </>
  )
}

export default Notes