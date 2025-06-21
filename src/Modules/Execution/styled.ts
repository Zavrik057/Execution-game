import { styled } from "@mui/material";


export const ExecutionStyled = styled('div')(({ theme }) => ({
   position: 'relative',
   display: "inline-block",
   scale: 0.8,
}));


export const LineOneStyled = styled('div')(() => ({
   width: '150px',
   height: '10px',
   background: 'black',
}));


export const LineTwoStyled = styled('div')(() => ({
   width: '10px',
   height: '300px',
   background: 'black',
   marginLeft: "70px",
}));

export const LineThreeStyled = styled('div')(() => ({
   width: '120px',
   height: '10px',
   background: 'black',
   marginLeft: '70px',
}));

export const LineFourStyled = styled('div')(() => ({
   position: 'absolute',
   top: '10px',
   width: '10px',
   height: '40px',
   background: 'black',
   right: 0,
}));

export const CercleStyled = styled('div')(() => ({
   position: 'absolute',
   top: '48px',
   width: '52px',
   height: '52px',
   borderRadius: '50%',
   border: '10px solid black',
   right: '-21px',
}));

export const BodyStyled = styled('div')(() => ({
   position: 'absolute',
   top: '98px',
   width: '10px',
   background: 'black',
   height: '70px',
   right: 0,
}));

export const LeftArmStyled = styled('div')(() => ({
   position: 'absolute',
   top: '92px',
   width: '10px',
   background: 'black',
   height: '50px',
   transform: 'rotate(45deg)',
   right: '22px',
}));

export const RightArmStyled = styled('div')(() => ({
   position: 'absolute',
   top: '92px',
   width: '10px',
   background: 'black',
   height: '50px',
   transform: 'rotate(-45deg)',
   right: '-22px',
}));

export const RightLegStyled = styled('div')(() => ({
   position: 'absolute',
   top: '158px',
   width: '10px',
   background: 'black',
   height: '45px',
   transform: 'rotate(-30deg)',
   right: '-12px',
}));

export const LeftLegStyled = styled('div')(() => ({
   position: 'absolute',
   top: '158px',
   width: '10px',
   background: 'black',
   height: '45px',
   transform: 'rotate(30deg)',
   right: '12px',
}));
