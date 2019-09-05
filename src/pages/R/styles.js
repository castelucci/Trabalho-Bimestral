import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=K2D:800&display=swap");
  color: #d2d2d2;
  background: #000;
  background-size: contain;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #00B4DB;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }

  form h1 {
    font: 50px "K2D", sans-serif;
    color: #095ABD;
    margin-bottom: 50px;
    line-height: 110px;
    text-align: center;
  }  
  label{
    padding-left: 8px;
  }
  label,
  input,
  button {
    width: 100%;
    margin-bottom: 15px;
  }

  input,
  button {
    height: 40px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
  }

  input {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 0 15px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 80px;
    font-weight: bold;    
    color: #064670;
    background-color:#0AB4C7;
  }
  @media screen and (min-width: 420px){
    form p {
  }
}
  
`;
