//LoginPage.tsx

import styled from 'styled-components';

// styled/LoginPage.tsx


const LoginPage = styled.div`

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; 
    margin: 0; 
  }

.{
    align-items: center;
justify-content: center;

}

header{
    text-align: center;
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
    color: white;
    font-size: 10rem;
    letter-spacing: 10px;
    grid-column-start: 1;
    grid-column-end: 4;
  }

@keyframes autowordselected {
    0% {
      background-color: #D9D9D9;
    } 
    100%{
      background-color: #737579;
    }
  }

.page-container {
    padding: 20px;
    padding-top: 50px;
    padding-left: 10rem;
    padding-right: 10rem;
    color : white;
    align-items: center;
    justify-content: center;
    
  }

.login-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width : 400px;
  }

  label {
    font-weight: bold;
  }

  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  p {
    margin-top: 10px;
    text-align: center;
  }

  a {
    color: #2196f3;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default LoginPage;