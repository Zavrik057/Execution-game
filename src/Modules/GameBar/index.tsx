import { GameBarLetter, GameBarWrapper } from "./styled"

type GameBarProps = {
   splitedGuesssedWord: string[],
   checkedLetters: string[],
   isLooser: boolean,
   getBarLetterStatus: (letter: string) => string,
}

const GameBar = ({ splitedGuesssedWord, checkedLetters, isLooser, getBarLetterStatus }: GameBarProps) => {

   const isChecked = (letter: string) => {
      if (isLooser) return letter;
      if (checkedLetters.includes(letter)) return letter;

      return;
   }

   return (
      <GameBarWrapper>
         {splitedGuesssedWord.map((letter, index) => (
            <GameBarLetter
               key={index}
               status={getBarLetterStatus(letter)}
            >
               {isChecked(letter)}
            </GameBarLetter>
         ))}
      </GameBarWrapper>
   );
}

export default GameBar;