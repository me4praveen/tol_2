import React from 'react';
import { ReactComponent as Logo } from "../assets/images/temple-of-learning-logo.svg";
import { styled } from '@mui/material/styles';
// import { SvgIcon, SvgIconProps } from '@mui/material';

const StyledLogo = styled(Logo)`
height: 40px;
width: 40px;

      & .cls-1 {
        fill: url(#linear-gradient);
      }

      & .cls-2, & .cls-3 {
        fill: #fad305;
      }

      & .cls-4, & .cls-5 {
        fill: #fff;
      }

      & .cls-6 {
        fill: #592d89;
      }

      & .cls-7 {
        fill: #f2f2f2;
        mix-blend-mode: multiply;
      }

      & .cls-8 {
        fill: url(#linear-gradient-3);
      }

      & .cls-9 {
        fill: url(#linear-gradient-4);
      }

      & .cls-10 {
        fill: url(#linear-gradient-2);
      }

      & .cls-3, & .cls-5, & .cls-11 {
        fill-rule: evenodd;
      }

      & .cls-12 {
        isolation: isolate;
      }

      & .cls-11 {
        fill: url(#linear-gradient-5);
      }
`
// const CustomLogo = (props : any) => {
//   return <StyledLogo {...props }/>
// }
export default StyledLogo;
