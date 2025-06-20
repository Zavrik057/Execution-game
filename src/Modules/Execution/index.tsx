import { BodyStyled, CercleStyled, ExecutionStyled, LeftArmStyled, LeftLegStyled, LineFourStyled, LineOneStyled, LineThreeStyled, LineTwoStyled, RightArmStyled, RightLegStyled } from "./styled";

type ExecutionProps = {
   errorCount: number,
}

const bodyParts = [
   <CercleStyled />,
   <BodyStyled />,
   <LeftArmStyled />,
   <RightArmStyled />,
   <RightLegStyled />,
   <LeftLegStyled />,
];

const Execution = ({ errorCount }: ExecutionProps) => {
   return (
      <ExecutionStyled>
         {bodyParts.slice(0, errorCount)}
         <LineFourStyled />
         <LineThreeStyled />
         <LineTwoStyled />
         <LineOneStyled />
      </ExecutionStyled>
   );
}

export default Execution;