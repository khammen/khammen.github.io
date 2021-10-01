import React, { useState } from 'react';
import { Button,  } from 'react-bootstrap';
//props: {setGuessedLetters: (newlets: string)=>void}

export function Menu({lossLevel, setLossLevel, guessedLetters, setGuessedLetters, hiddenWord, setHiddenWord, blanks, setBlanks}: 
  {lossLevel: number, setLossLevel: (badGuesses: number)=>void,
    guessedLetters: string, setGuessedLetters: (newLetterList: string)=>void,
    hiddenWord: string, setHiddenWord: (newWord: string)=>void,
    blanks: string, setBlanks: (newBlanks: string)=>void}): JSX.Element{
    
    const [entryBoxText, setEntryBoxText] = useState<string>('');
    

    function resetGame(): void{
      setLossLevel(0);
      setGuessedLetters('');
      setHiddenWord('');
      const tempWord = window.prompt("Enter a word for someone else to guess:");
      setHiddenWord(tempWord as string);
      setBlanks('');
      displayBlanks(hiddenWord, entryBoxText);
    }
    function guessBox(boxText: string){
      if (hiddenWord.includes(entryBoxText)){
        setBlanks('');
        displayBlanks(hiddenWord, entryBoxText);
      } else {
        setGuessedLetters(guessedLetters + entryBoxText);
        setLossLevel(lossLevel+1);
      }
      setEntryBoxText('');
    }
    function displayBlanks(hiddenWord: string, guessedLetters: string): void{
      for (let i=0; i<hiddenWord.length; i++){
          if (hiddenWord[i]===guessedLetters){
              setBlanks(blanks + hiddenWord[i] + "  ");
          } else {
              setBlanks(blanks + "_  ");
          }
      }
  }

    return <div><form>
    <input
        type="textbox"
        name="Enter a letter to guess:"
        value={entryBoxText}
        onChange={(e)=>{setEntryBoxText(e.target.value)}}
      />
      <Button onClick= {()=> guessBox(entryBoxText)}>Submit</Button>
  </form>
  <Button onClick= {()=> setLossLevel(lossLevel+1)}>Update image</Button>
  <Button onClick= {()=> resetGame()}>New Game</Button>
  </div>
}