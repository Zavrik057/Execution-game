import { styled } from "@mui/material";
import { getColor } from "./getColor";

export const GameBarWrapper = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '30px',
}));

type GameBarLetterProps = {
   status: string,
}

export const GameBarLetter = styled('div')<GameBarLetterProps>(({ status }) => ({
   height: '40px',
   width: '40px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   fontSize: '35px',
   textTransform: 'uppercase',
   position: 'relative',
   paddingBottom: '20px',
   borderBottom: '10px solid black',
   fontWeight: 'bold',
   ...getColor(status),
}));