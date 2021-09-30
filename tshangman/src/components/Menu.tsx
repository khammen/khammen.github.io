import { Button } from 'react-bootstrap';
//props: {setGuessedLetters: (newlets: string)=>void}

export function Menu(): JSX.Element{
    return <div><form>
    <label>
      Guess a letter:
      <input type="text"/>
    </label>
    <input type="submit" value="Submit" />
  </form>
  </div>
}