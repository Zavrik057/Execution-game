import { Button } from "@mui/material";
import { ResetButtonStyled, ResetGameStyled } from "./styled";

type ResetGameProps = {
   isWinner: boolean,
   isLooser: boolean,
   resetGame: () => void,
}
const ResetGame = ({ isWinner, isLooser, resetGame }: ResetGameProps) => {
   return (
      <ResetGameStyled
         isHidden={!(isLooser || isWinner)}
      >
         {isWinner && 'Winner !!!'}
         {isLooser && 'Nice try, but you lost'}
         <ResetButtonStyled onClick={resetGame}>
            Reset Game
         </ResetButtonStyled>
      </ResetGameStyled>
   );
}

export default ResetGame;