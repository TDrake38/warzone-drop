import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route render={() => <div>404</div>} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </>
    )
}

export default App;