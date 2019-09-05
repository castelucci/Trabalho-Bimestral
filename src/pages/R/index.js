import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import home from "../../assets/home.svg";

export default function Login() {
  return (
    <Container>
      <div>
        <form>
          <h1>
            Recuperação de Senha do Trabalho Bimestral
          </h1>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email"/>
          <button type="submit">Recuperar</button>
        </form>
        <nav>
          <Link className="link" to="/">
          <img src={home } alt="Login" />
          <p>login</p>
        </Link>
        <Link className="link" to="/c">
          <img src={home } alt="Cadastro" />
          <p>Cadastro</p>
        </Link>
      </nav>
      </div>
    </Container>
  );
}
