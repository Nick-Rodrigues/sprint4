"use client";
import React from "react"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function cadastro() {

    const navigate = useRouter();

    const [usuario, setUsuario] = useState({
        login:"",
        senha:"",
        email:"",
        nome:"",
        cpf:"",
        rg:"",
        nascimento:"",
        cep:"",
        marca:"",
        modelo:"",
        nf:""
    })

    const [msg, setMsg] = useState("");
    const [classeLoginMsg, setClasseLoginMsg] = useState("");

    useEffect(() => {
        if(msg == "Cadastro realizado com sucesso!"){
          setClasseLoginMsg("login-sucesso");
        }else if(msg == "Ocorreu um erro no preenchimento."){
          setClasseLoginMsg("login-erro");
        }else{
          setClasseLoginMsg("login-none");
        }
      }, [msg])

    const handleChange = (e) => {
        const {name, value } = e.target;
        setUsuario({...usuario, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3000/api/base/base-cad",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario),
            });

            if (response.ok) {
                const obj = await response.json();
                if (obj) {
                    
                    setMsg("Cadastro realizado com sucesso!");
                    
                    setTimeout(()=>{
                        setMsg("");
                        navigate.push("/");
                    },5000);
                } else {
                  
                    setMsg("Ocorreu um erro no preenchimento.");
                    setTimeout(()=>{
                        setMsg("");
                        setUsuario({
                            login:"",
                            senha:"",
                            email:"",
                            nome:"",
                            cpf:"",
                            rg:"",
                            nascimento:"",
                            cep:"",
                            marca:"",
                            modelo:"",
                            nf:""
                        });
                    },5000);
                }
              }
    } catch (error) {
        console.error(error);
    }
    
    }

  return (
    <>   
        <div>
            <h1>Cadastro</h1>
            <h2 className={classeLoginMsg}>{msg}</h2>        
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>CADASTRO</legend>
                    <div>
                    <label htmlFor="idLogin">Login:</label>
                    <input
                        type="text"
                        name="login"
                        id="idLogin"
                        placeholder="Digite seu Login."
                        value={usuario.login}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idSenha">Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        id="idSenha"
                        placeholder="Digite sua Senha."
                        value={usuario.senha}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idEmail">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="idEmail"
                        placeholder="Digite seu Email."
                        value={usuario.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idNome">Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        id="idNome"
                        placeholder="Digite seu Nome."
                        value={usuario.nome}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idCpf">CPF:</label>
                    <input
                        type="number"
                        name="cpf"
                        id="idCpf"
                        placeholder="Digite seu CPF."
                        value={usuario.cpf}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idRg">RG:</label>
                    <input
                        type="number"
                        name="rg"
                        id="idRg"
                        placeholder="Digite seu RG."
                        value={usuario.rg}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idNascimento">Nascimento:</label>
                    <input
                        type="date"
                        name="nascimento"
                        id="idNascimento"
                        placeholder="Digite sua data de nascimento."
                        value={usuario.nascimento}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idCep">CEP:</label>
                    <input
                        type="number"
                        name="cep"
                        id="idCep"
                        placeholder="Digite seu CEP."
                        value={usuario.cep}
                        onChange={handleChange}
                    />
                    </div>
                    <legend>Cadastro da bicicleta</legend>
                    <div>
                    <label htmlFor="idMarca">Marca:</label>
                    <input
                        type="text"
                        name="marca"
                        id="idMarca"
                        placeholder="Digite a marca."
                        value={usuario.marca}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idModelo">Modelo:</label>
                    <input
                        type="text"
                        name="modelo"
                        id="idModelo"
                        placeholder="Digite o modelo."
                        value={usuario.modelo}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label htmlFor="idNf">Nota fiscal:</label>
                    <input
                        type="number"
                        name="nf"
                        id="idNf"
                        placeholder="Digite a nota fiscal."
                        value={usuario.nf}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                        <button>CADASTRAR</button>
                    </div>
                    <div>
                        <p>Se você já possui registro.  <Link href="/login">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>
    </>
  )
}
