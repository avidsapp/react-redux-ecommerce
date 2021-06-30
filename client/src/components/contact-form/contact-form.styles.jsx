import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

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

  #contact-form {
    width: 100%;
  }

  h2.title {
    width: 100%;
    text-align: left;
  }
`;
