
import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
            <Route path="/" exact component={Home}/>
            <Route render={() => <div>404</div>} />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
