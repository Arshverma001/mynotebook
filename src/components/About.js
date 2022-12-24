import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const About = () => {
    const a=useContext(NoteContext)
  return (
    <div>This is About {a.name}</div>
  )
}

export default About;