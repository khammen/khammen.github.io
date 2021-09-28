import React from 'react';
import './App.css';
import { Background } from './components/Background';
import {WordProgress} from './components/WordProgress';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';


import { Container } from 'react-bootstrap';

function App(): JSX.Element {
    return (
        <div className="App">
            <Container className="App">
              <Background></Background>
              <WordProgress></WordProgress>
            </Container> 
        </div>
    );
}

export default App; 

/**
<Container className="App">
    <Background></Background>
    <WordProgress></WordProgress>
</Container> 
*/