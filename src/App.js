
import Nav from './nav';
import Hsec1 from './hsec1';
import Hsec2 from './hsec2';
import Hsec3 from './hsec3';
import './App.css';
import { Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">

      <Nav/>
      <Hsec1/>
      <Hsec2/>
      <Hsec3/>

    </div>


  ); 
}

export default App;
