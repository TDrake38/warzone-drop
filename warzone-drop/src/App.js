import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import NavBar from "./components/NavBar";
//import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {

  const [dropLocation, setDropLocation] = useState();

  return (
    <>
      <NavBar dropLocation={dropLocation}/>
      <Container>
        <Home dropLocation={dropLocation} setDropLocation={setDropLocation} />
      </Container>
    </>
  );
}

export default App;
