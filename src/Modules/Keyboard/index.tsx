
import letters from "./letters.json";
import { KeyboardKeyStyled, KeyboardWrapper } from "./styled";

type KeyboardProps = {
   addCheckedLetter: (letter: string) => void,
   getKeyboardLetterStatus: (letter: string) => string | void,
   isFinished: boolean,
}

const Keyboard = ({ addCheckedLetter, getKeyboardLetterStatus, isFinished }: KeyboardProps) => {


   return (
      <KeyboardWrapper>
         {letters.map((letter, index) => (
            <KeyboardKeyStyled
               onClick={() => {
                  if(!isFinished) return addCheckedLetter(letter)
               }
            }
               key={index}
               status={getKeyboardLetterStatus(letter)}
               disabled={getKeyboardLetterStatus(letter) === 'disabled'}
            >
               {letter}
            </KeyboardKeyStyled>
         ))}
      </KeyboardWrapper>
   );
}

export default Keyboard;