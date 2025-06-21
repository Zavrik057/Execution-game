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
         scale: 0.6,
         margin: '-20px 0',
      }
   },
   [theme.breakpoints.down('sm')]: {
      gap: '20px',
      '& > div:nth-child(1)': {
         scale: 0.5,
         margin: '-50px 0 -50px',
      },
      '& > div:nth-child(3)': {
         scale: 0.45,
         margin: '-50px 0',
      }
   },
}));