import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from "./components/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home/>
      </Container>
    </>
  );
}

export default App;
