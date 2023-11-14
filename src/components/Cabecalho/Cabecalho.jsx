"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Cabecalho() {
  const usuario = JSON.parse(sessionStorage.getItem("obj-user"));
  const [userLogado] = useState(usuario);

  const handleLogout = () => {
    sessionStorage.removeItem("obj-user");
    sessionStorage.removeItem("token-user");
    window.location.href = "/";
  };

  if (sessionStorage.getItem("token-user") != null) {
    return (
      <header className="cabecalho">
        <figure>
          <Image src="/logojano.jpg" alt="logo janos" width={400} height={390} />
        </figure>       
        <nav>
          <a className="etapas" href="./etapas">
            <p>etapas</p>
          </a>
          <a className="integrantes" href="./integrantes">
            <p>integrantes</p>
          </a>
          <a className="cadastro" href="./cadastro">
            <p>cadastro</p>
          </a>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="cabecalho">
        <figure>
          <Image src="/logojano.jpg" alt="logo janos" width={400} height={390} />
        </figure>  
        <nav>
          <ul>
            <li>
              <Link href="/">-HOME</Link>
            </li>
            <li>
              <Link href="/login">-Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
