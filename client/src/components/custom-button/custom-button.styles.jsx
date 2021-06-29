import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: var(--black);
  color: var(--white);
  border: none;

  &:hover {
    background-color: var(--white);
    color: var(--black);
    border: 1px solid var(--black);
  }
`;

const invertedButtonStyles = css`
  background-color: var(--black);
  color: var(--white);
  border: 1px solid var(--black);

  &:hover {
    background-color: var(--black);
    color: var(--white);
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: var(--primary-color);
  color: var(--white);
  border: none;

  &:hover {
    background-color: var(--white);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    min-width: 100px;
  }

  ${getButtonStyles}
`;
