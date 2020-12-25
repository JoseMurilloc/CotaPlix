import { keyframes } from "styled-components";

export const moveRightToLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const upBoxOptions = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;