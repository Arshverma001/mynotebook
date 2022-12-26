import React ,{useState}from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
   const notesInitial=
    [
      {
        "_id": "63a5cce2a67a0fa6177a2c35",
        "user": "63a5c64f6f8dad0a74b12d35",
        "title": "my title",
        "description": "heheheheheh",
        "tag": "notag",
        "date": "2022-12-23T15:44:34.675Z",
        "__v": 0
      },
      {
        "_id": "63a5cce2a67a0fa6177a2c37",
        "user": "63a5c64f6f8dad0a74b12d35",
        "title": "my title",
        "description": "heheheheheh",
        "tag": "notag",
        "date": "2022-12-23T15:44:34.849Z",
        "__v": 0
      },
      {
        "_id": "63a5cce3a67a0fa6177a2c39",
        "user": "63a5c64f6f8dad0a74b12d35",
        "title": "my title",
        "description": "heheheheheh",
        "tag": "notag",
        "date": "2022-12-23T15:44:35.022Z",
        "__v": 0
      },
      {
        "_id": "63a5cce3a67a0fa6177a2c3b",
        "user": "63a5c64f6f8dad0a74b12d35",
        "title": "my title",
        "description": "heheheheheh",
        "tag": "notag",
        "date": "2022-12-23T15:44:35.271Z",
        "__v": 0
      },
      {
        "_id": "63a5cce3a67a0fa6177a2c3d",
        "user": "63a5c64f6f8dad0a74b12d35",
        "title": "my title",
        "description": "heheheheheh",
        "tag": "notag",
        "date": "2022-12-23T15:44:35.448Z",
        "__v": 0
      }
    ]

    const [notes, setNotes] = useState(notesInitial)
   
  return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  ) 
}

export default NoteState