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