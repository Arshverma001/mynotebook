import React ,{useState}from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

  const host='http://localhost:5000'
  const notesInitial=[];
  const [notes, setNotes] = useState(notesInitial)
    

   //Get note
   const getNotes=async ()=>{
    //console.log("adding a note")
    //TODO API CALL

         //API call
         const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', 
          
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNWM2NGY2ZjhkYWQwYTc0YjEyZDM1In0sImlhdCI6MTY3MTgwODU5MX0.munq70LKWo5YGeKhtG5pcGcFtC3ahD8Krm-8OG0SrcA'
            
          },
        });
        const json=await response.json()
        console.log(json)
        setNotes(json)
  }




    //Add note
    const addNote=async (title,description,tag)=>{
      console.log("adding a note")
      //TODO API CALL

           //API call
           const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', 
            
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNWM2NGY2ZjhkYWQwYTc0YjEyZDM1In0sImlhdCI6MTY3MTgwODU5MX0.munq70LKWo5YGeKhtG5pcGcFtC3ahD8Krm-8OG0SrcA'
              
            },
            body: JSON.stringify({title,description,tag}) 
          });
 

    //  const note= {
    //     "_id": "63a5cce3a67a0fa6177a2c4d",
    //     "user": "63a5c64f6f8dad0a74b12d36",
    //     "title": title,
    //     "description": description,
    //     "tag":tag,
    //     "date": "2022-12-23T15:44:35.448Z",
    //     "__v": 0
    //   }
    const note = await response.json();
    setNotes(notes.concat(note))
    }


     //Delete note
     const deleteNote=async(id)=>{
       console.log("delete node with"+id)
         //TODO API CALL

         const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE', 
          
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNWM2NGY2ZjhkYWQwYTc0YjEyZDM1In0sImlhdCI6MTY3MTgwODU5MX0.munq70LKWo5YGeKhtG5pcGcFtC3ahD8Krm-8OG0SrcA'
            
          },
          
        });
        const json=await response.json()
        console.log(json)

      const newNote=notes.filter((note)=>{return note._id!==id})
      setNotes(newNote)

     }




      //Edit note
    const editNote= async(id,title,description,tag)=>{

      //API call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', 
        
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNWM2NGY2ZjhkYWQwYTc0YjEyZDM1In0sImlhdCI6MTY3MTgwODU5MX0.munq70LKWo5YGeKhtG5pcGcFtC3ahD8Krm-8OG0SrcA'
          
        },
        body: JSON.stringify({title,description,tag}) 
      });
      const json=await response.json(); 
      console.log(json)
      let newNotes=JSON.parse(JSON.stringify(notes))
      for(let i=0;i<newNotes.length;i++)
      {
       const element=newNotes[i]
       if(element._id===id)
       {
        newNotes[i].title=title;
        newNotes[i].description=description;
        newNotes[i].tag=tag;
        break;
       }
    }
    setNotes(newNotes)
  }
        

  return(
    <NoteContext.Provider value={{notes,setNotes,addNote,editNote,deleteNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
  ) 
}

export default NoteState






