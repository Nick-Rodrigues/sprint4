"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./cabecalho.modules.css";

export default function Cabecalho() {
  const [userLogado, setUserLogado] = useState(null);

  useEffect(() => {
    const usuario =
      typeof window !== "undefined"
        ? JSON.parse(sessionStorage.getItem("obj-user"))
        : null;
    setUserLogado(usuario);
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("obj-user");
      sessionStorage.removeItem("token-user");
      window.location.href = "/";
    }
  };

  if (userLogado) {
    return (
      <header className="cabecalho">
        <figure>
          <Image
            className="logo"
            src="/logojano.jpg"
            alt="logo janos"
            width={400}
            height={390}
          />
        </figure>
        <nav>
          <a className="etapas" href="./etapas">
            <p>etapas</p>
          </a>
          <a className="integrantes" href="./integrantes">
            <p>integrantes</p>
          </a>
          <a onClick={handleLogout} className="logout" href="./">
            <p>Logout</p>
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
          <Image className="logo"
            src="/logojano.jpg"
            alt="logo janos"
            width={400}
            height={390}
          />
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