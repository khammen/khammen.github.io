import React, { useState } from 'react';
import './App.css';
import { Background } from './components/Background';
import {WordProgress} from './components/WordProgress';
import {Menu} from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
import { letterDisplay } from './interfaces/letterDisplay';

function App(): JSX.Element {
  const [guessedLetters, setGuessedLetters] = useState<string>('');
  const [hangStage, setHangStage] = useState<number>(0);
  const [letterSlots, setLetterSlots] = useState<string>('');
    return (
      <Container className="App">
        <Row>
          <Col>
            <Background lossLevel = {hangStage}></Background>
          </Col>
          <Col>
            <WordProgress wrongLetters = {guessedLetters} blanks = {letterSlots}></WordProgress>
            <Menu lossLevel = {hangStage} setLossLevel = {setHangStage}></Menu>
          </Col>
        </Row>          
      </Container> 
    );
}

export default App; 
