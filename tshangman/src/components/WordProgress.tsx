
import { letterDisplay } from '../interfaces/letterDisplay';

export function WordProgress({wrongLetters, blanks, hiddenWord, setHiddenWord}:
     {wrongLetters: string, blanks: string,
    hiddenWord: string, setHiddenWord: (newWord: string)=>void}): JSX.Element{
    
    return <div>
        <h1>Letters Guessed:</h1>
        <div><strong>Wrong Letters:</strong> {wrongLetters}</div>
        <div><strong>Word Progress:</strong>{hiddenWord}</div>
        <div>{blanks}</div>
    </div>
}

 /**
     * Things to include here:
     * - Letter count function
     * - Render blanks for every letter
     *  - Each its own object?
     * - Replace blank with letter when it's guessed
     * - Wrong letter display
     */