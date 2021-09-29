
export function WordProgress(): JSX.Element{
    /**
     * Things to include here:
     * - Letter count function
     * - Render blanks for every letter
     *  - Each its own object?
     * - Replace blank with letter when it's guessed
     * - Wrong letter display
     * 
     * Question for later: And another question: Say there's a variable I'd like to pass into the body of my HTML that a component 
     * returns. (In this case for hangman, I'd like to return a string representing the letters guessed that aren't in the word). 
     * Naturally I can't have that be a fixed string, since I'd need to concatenate each wrong guess. Is there a way to pass a variable
     * into an HTML body, or should I try to find another way to do this?
     */
    
    return <div>
        <h1>Letters Guessed:</h1>
        <div>Wrong Letters: </div>
    </div>
}