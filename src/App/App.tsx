
import { useCallback, useEffect, useState } from "react";
import { getRandomWord } from "../utils/randomWordFunction";
import { getSplitedWord } from "../utils/splitWordFunction";
import Execution from "../Modules/Execution";
import GameBar from "../Modules/GameBar";
import { AppStyled } from "./styled";
import Keyboard from "../Modules/Keyboard";
import ResetGame from "../Modules/ResetGame";

function App() {

  const [guessedWord, setGuessedWord] = useState(getRandomWord());
  const [splitedGuesssedWord, setSplitedGuessedWord] = useState(getSplitedWord(guessedWord));
  const [checkedLetters, setCheckedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [guessedCount, setGuessedCount] = useState<number>(0);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [isLooser, setIsLooser] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const addCheckedLetter = useCallback((letter: string) => {
    if(checkedLetters.includes(letter)) return 

    setCheckedLetters((prev) => [...prev, letter]);
    if (!splitedGuesssedWord.includes(letter)) {
      setErrorCount((prev) => prev + 1);
    } else {
      splitedGuesssedWord.filter((item: string) => letter === item).forEach(() => {
        setGuessedCount((prev) => prev + 1);
      });
    }
  }, [checkedLetters]);

  const getKeyboardLetterStatus = (letter: string) => {
    if (!checkedLetters.includes(letter)) return;
    if (!splitedGuesssedWord.includes(letter)) {

      return 'disabled';
    } else {

      return 'guessed';
    }
  }
  const getBarLetterStatus = (letter: string) => {
    if (checkedLetters.includes(letter)) {

      return 'checked';
    } else {

      return 'unchecked';
    }
  }

  const resetGame = () => {
    const NEWWORD = getRandomWord();
    setGuessedWord(NEWWORD);
    setSplitedGuessedWord(getSplitedWord(NEWWORD));
    setCheckedLetters([]);
    setErrorCount(0);
    setGuessedCount(0);
    setIsLooser(false);
    setIsWinner(false);
    setIsFinished(false);
  }

  useEffect(() => {
    if (guessedCount === splitedGuesssedWord.length) {
      setIsWinner(true);
      setIsFinished(true);
    }
    if (errorCount === 6) {
      setIsLooser(true);
      setIsFinished(true);
    }
  }, [guessedCount, errorCount]);

  useEffect(() => {
    const keyHandle = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addCheckedLetter(key);
    }

    document.addEventListener('keypress', keyHandle);

    return () => {
      document.removeEventListener('keypress', keyHandle);
    }
  }, [checkedLetters]);

  return (
    <AppStyled>
      <Execution errorCount={errorCount} />
      <GameBar
        splitedGuesssedWord={splitedGuesssedWord}
        checkedLetters={checkedLetters}
        isLooser={isLooser}
        getBarLetterStatus={getBarLetterStatus}
      />
      <Keyboard
        addCheckedLetter={addCheckedLetter}
        getKeyboardLetterStatus={getKeyboardLetterStatus}
        isFinished={isFinished}
      />
      <ResetGame
        isLooser={isLooser}
        isWinner={isWinner}
        resetGame={resetGame}
      />
    </AppStyled>
  );
}

export default App;
