import { styled } from "@mui/material";
import { getStatusStyles } from "./getStatusStyles";

export const KeyboardWrapper = styled('div')(({ theme }) => ({
   display: 'grid',
   alignItems: 'center',
   gridTemplateColumns: 'repeat(10, 50px)',
   gap: '10px',
   [theme.breakpoints.down('sm')] : {
      gridTemplateColumns: 'repeat(7, 70px)',
   }
}));

type KeyboardKeyProp = {
   status: string | void,
}

export const KeyboardKeyStyled = styled('button')<KeyboardKeyProp>(({ status }) => ({
   width: '100%',
   aspectRatio: '1/1',
   borderRadius: '5px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '5px',
   fontSize: '30px',
   fontWeight: 'bold',
   transition: 'all 0.2s ease',
   ...getStatusStyles(status),
}));