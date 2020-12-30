import styled, { css } from 'styled-components';

interface StyleLinkProps {
  margin?: boolean;
}

export const StyleLink = styled.a<StyleLinkProps>`

  cursor: pointer;

  ${props => props.margin && css`margin-top: 23px;`}
  
  background: rgba(226, 226, 226, 0.5);
  border: 2px solid #6B68FB;
  box-sizing: border-box;
  border-radius: 30px;
  
  width: 189px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 16px;
  line-height: 19px;

  letter-spacing: 0.015em;
  color: #FFFFFF;
`;
