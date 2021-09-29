import React from 'react';
import './App.css';
import { Background } from './components/Background';
import {WordProgress} from './components/WordProgress';
import {Menu} from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';

function App(): JSX.Element {
    return (
      <Container className="App">
        <Row>
          <Background></Background>
          <WordProgress></WordProgress>
          <Menu></Menu>
        </Row>          
      </Container> 
    );
}

export default App; 
