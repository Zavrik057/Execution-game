import { Button, styled } from "@mui/material";

type ResetGameStyledProps = {
   isHidden: boolean,
}

export const ResetGameStyled = styled('div')<ResetGameStyledProps>(({ isHidden }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '30px',
   padding: '5px',
   visibility: isHidden ? 'hidden' : 'visible',
   fontSize: '18px',
}));

export const ResetButtonStyled = styled(Button)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '10px 20px',
   borderRadius: '60px',
   background: '#9999FF',
   color: 'white',
   fontSize: '18px',
   textTransform: 'capitalize',
}));