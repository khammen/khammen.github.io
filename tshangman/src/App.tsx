import React, { useState } from 'react';
import './App.css';
import { Background } from './components/Background';
import {WordProgress} from './components/WordProgress';
import {Menu} from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
import { letterDisplay } from './interfaces/letterDisplay';

/**To Do list:
 * Have image update on entering a letter
 * Accept word and save it to newWord
 * Display blanks for the guessed word
 * Parse relevant strings to figure out where guessed letters go
 * Replace blanks with right letter guesses 
 */

function App(): JSX.Element {
  const [guessedLetters, setGuessedLetters] = useState<string>('');
  const [hangStage, setHangStage] = useState<number>(0);
  const [letterSlots, setLetterSlots] = useState<string>('');
  const [newWord, setNewWord] = useState<string>('');
    return (
      <Container className="App">
        <Row>
          <Col>
            <Background lossLevel = {hangStage}></Background>
          </Col>
          <Col>
            <WordProgress wrongLetters = {guessedLetters} blanks = {letterSlots}
            hiddenWord= {newWord} setHiddenWord = {setNewWord}></WordProgress>
            <Menu lossLevel = {hangStage} setLossLevel = {setHangStage}
            wrongLetters = {guessedLetters} setWrongLetters = {setGuessedLetters}
            hiddenWord= {newWord} setHiddenWord = {setNewWord}></Menu>
          </Col>
        </Row>          
      </Container> 
    );
}

export default App; 
