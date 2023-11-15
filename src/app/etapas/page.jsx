import React from 'react'
import "./etapas.modules.css"

export default function Etapas() {
  return (
    <>
    <div className="etapas-main">
        <h1 className="caixaAlta">Etapa do asseguramento</h1>
            <div>
                <h2 className="titulo-etapas">Cadastramento com o bot</h2>
                    <p className="texto-etapas">
                        Com nosso bot de cadastros é muito mais facil e rapido, pois será
                        solicitado os dados e fotos necessárias, e logo em seguida com nosso
                        processo de avaliação já tera a sua resposta se seu seguro foi a
                        aprovado ou não.
                    </p>
            </div>
            <div>
                <h2 className="titulo-etapas">Sistema de avaliação</h2>
                    <p className="texto-etapas">
                        Nosso sistema de avaliação é feio com base em fotos que pedimos de
                        sua bicicleta, verificamos a integridade dessas fotos para não
                        sofrermos fraudes, e após tudo estar correto verificamos se você é
                        elegivel para finalizar a etapa da contratação do seguro.
                    </p>
            </div>

            <div>
                <h2 className="titulo-etapas">Utilização do rastreador</h2>
                    <p className="texto-etapas">
                        A ideia do rastreador consiste nele ser enviado ao cliente após a
                        confirmação de contratação dos serviços, ao receber e ser instalado
                        o cliente contata a empresa para ativação do localizador. A partir
                        daí esse objeto não pode ser removido e servirá como uma condição
                        nas imagens e garantir que as fotos tiradas são da bicicleta do
                        seguro. Se, por acaso houver a remoção do tal, a empresa será
                        notificada imediatamente para contatar o segurador.
                    </p>
            </div>

    </div>
    </>
  )
  }