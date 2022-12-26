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


function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert message="jawdd toh hai"/>
    <div className='container'>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    </div>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
