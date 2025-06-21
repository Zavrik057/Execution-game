import { styled } from "@mui/material";

export const AppStyled = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '50px',
   margin: '0 auto',
   width: '1200px',
   justifyContent: 'center',
   padding: '20px 0',
   [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '20px',
      gap: '20px',
      '& > div': {
         scale: 0.7,
         margin: '-10px 0',
      }
   },
   [theme.breakpoints.down('sm')]: {
      gap: '20px',
      '& > div:nth-child(1)': {
         scale: 0.7,
         margin: '-40px 0 -30px',
      },
      '& > div:nth-child(3)': {
         scale: 0.5,
         margin: '-40px 0',
      }
   },
}));