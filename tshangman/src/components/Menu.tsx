import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
//props: {setGuessedLetters: (newlets: string)=>void}

export function Menu({lossLevel, setLossLevel, wrongLetters, setWrongLetters, hiddenWord, setHiddenWord}: 
  {lossLevel: number, setLossLevel: (badGuesses: number)=>void,
    wrongLetters: string, setWrongLetters: (newLetterList: string)=>void,
    hiddenWord: string, setHiddenWord: (newWord: string)=>void}): JSX.Element{
    
    const [entryBoxText, setEntryBoxText] = useState<string>('');

    function resetGame(): void{
      setLossLevel(0);
      setWrongLetters('');
      setHiddenWord('');
    }
    function guessBox(boxText: string){
      setHiddenWord(boxText);
      setEntryBoxText('');
    }
    return <div><form>
    <input
        type="textbox"
        name="Enter a new word"
        value={entryBoxText}
        onChange={(e)=>{setEntryBoxText(e.target.value)}}
      />
      <Button onClick= {()=> guessBox(entryBoxText)}>Submit</Button>
  </form>
  <Button onClick= {()=> setLossLevel(lossLevel+1)}>Update image</Button>
  <Button onClick= {()=> resetGame()}>New Game</Button>
  </div>
}