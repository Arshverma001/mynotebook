import './App.css';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from '../src/components/About';
import NoteState from '../src/context/notes/NoteState';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className='container'>
    <Switch>
          <Route exact path="/">
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert}/>
          </Route>
        </Switch>
    </div>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
