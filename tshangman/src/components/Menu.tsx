import { Button } from 'react-bootstrap';
//props: {setGuessedLetters: (newlets: string)=>void}

export function Menu({lossLevel, setLossLevel}: 
  {lossLevel: number, setLossLevel: (badGuess: number)=>void}): JSX.Element{
    return <div><form>
    <label>
      Guess a letter:
      <input type="text"/>
    </label>
    <input type="submit" value="Submit" />
    <Button onClick= {()=> setLossLevel(lossLevel+1)}>Update image</Button>
  </form>
  </div>
}