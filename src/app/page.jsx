"use client"

import Router, { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const navigate = useRouter();

  useEffect(() => {
    if(sessionStorage.getItem("token-user") != null){
       navigate.refresh();
     }    
   },[navigate]);

  return (
    <>
      <div className="main-div">
        <div>
          <h2 className="titulo-janos">O que é a Janos Enterprise?</h2>
          <p className="texto-janos">
            A Janos surgiu como uma empresa parceira da Porto Seguro com
            objetivo de automatizar o processo de vistoria de bicicletas,
            fazendo com que gere uma facilidade ao cliente juntamente com uma
            segurança a seguradora ao concluir a contratação do seguro.
          </p>
        </div>
        <div>
          <h2 className="titulo-janos">Qual o objetivo do projeto?</h2>
          <p className="texto-janos">
            Utilizar uma Inteligência Artificial para contactar o usuário, que
            irá validar dados sobre o usuário, e será fornecido uma aplicação
            para ser utilizada a câmera do celular para o envio de fotos da
            bicicleta, esses dados serão validados pelo banco de dados e
            certificará que a bicicleta realmente condiz com a bicicleta real.
          </p>
        </div>

        <div>
          <h2 className="titulo-janos">Descrição do Projeto</h2>
          <p className="texto-janos">
            Após o acionamento da central para a tentativa do seguro e um
            pré-cadastro realizado pelo cliente, será encaminhado um link(de
            modo temporário) que irá direcionar o cliente para uma página onde
            ele terá que tirar um quantidade de fotos pré definidas e será
            indicado os locais da bicicleta que serão necessários para tirar as
            fotos(quadro, soldas e etc). Após o envio das fotos, será enviado
            para nossa aplicação e validado pelo nosso banco de dados, para
            possibilitar dar continuação ao processo do seguro..
          </p>
        </div>
      </div>
    </>
  );
}
