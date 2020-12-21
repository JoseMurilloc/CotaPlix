import styled, { css } from 'styled-components';

interface StyleLinkProps {
  margin?: boolean;
}

export const StyleLink = styled.a<StyleLinkProps>`

  cursor: pointer;

  ${props => props.margin && css`margin-top: 23px;`}
  border: 1px solid #FFFFFF;
  border-radius: 30px;
  
  width: 255px;
  height: 51px;

  background-color: transparent;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 16px;
  line-height: 19px;

  letter-spacing: 0.015em;
  color: #FFFFFF;
`;
