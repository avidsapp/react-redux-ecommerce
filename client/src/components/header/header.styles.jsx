import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: white;
    border-radius: 50px;
    transition: 1s box-shadow;

    svg {
      width: 90%;
      height: 90%;
      padding: 5%;
      margin: 5%;
    }

    :hover {
      box-shadow: 0 2px 15px 0px rgba(0,0,0,.1);
    }

    :hover::before,
    :hover::after {
      display: block;
      content: '';
      position: absolute;
      width: 70px;
      height: 70px;
      background: var(--primary-color);
      border-radius: 50px;
      z-index: -1;
      animation: 1s clockwise infinite;
    }

    :hover:after {
      background: var(--tertiary-color);
      animation: 2s counterclockwise infinite;
    }

    @keyframes clockwise {
      0% {
        top: -3px;
        left: 0;
      }
      12% {
        top: -1px;
        left: 1px;
      }
      25% {
        top: 0;
        left: 3px;
      }
      37% {
        top: 1px;
        left: 1px;
      }
      50% {
        top: 3px;
        left: 0;
      }
      62% {
        top: 1px;
        left: -1px;
      }
      75% {
        top: 0;
        left: -3px;
      }
      87% {
        top: -1px;
        left: -1px;
      }
      100% {
        top: -3px;
        left: 0;
      }
    }

    @keyframes counterclockwise {
      0% {
        top: -3px;
        right: 0;
      }
      12% {
        top: -1px;
        right: 1px;
      }
      25% {
        top: 0;
        right: 3px;
      }
      37% {
        top: 1px;
        right: 1px;
      }
      50% {
        top: 3px;
        right: 0;
      }
      62% {
        top: 1px;
        right: -1px;
      }
      75% {
        top: 0;
        right: -3px;
      }
      87% {
        top: -1px;
        right: -1px;
      }
      100% {
        top: -3px;
        right: 0;
      }
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

OptionLink.displayName = 'OptionLink';
