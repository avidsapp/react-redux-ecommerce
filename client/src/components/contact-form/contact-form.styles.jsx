import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  label {
    display: none;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    margin: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
