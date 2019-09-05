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
            Trabalho Bimestral
          </h1>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email"/>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" />
          <button type="submit">Entrar</button>
        </form>
        <nav>
        <Link className="link" to="/c">
          <img src={home } alt="Cadastro" />
          <p>Cadastro</p>
        </Link>
        <Link className="link" to="/r">
          <img src={home } alt="Recuperação" />
          <p>Recuperação</p>
        </Link>
      </nav>
      </div>
    </Container>
  );
}
