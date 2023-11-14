import Image from "next/image"

export default function Integrantes() {
  return (
    <div className="integrantes-main">
      <h1 className="subtitulo">Integrantes</h1>
      <div>
        <figure>
          <Image src="/omaisgato.jpg" alt='Nicolas' width={540} height={360}/>
          <figcaption>rm-551060 / 1TDSPG</figcaption>
        </figure>
        <figure>
        <Image src="/pedro.jpg" alt='Pedro' width={540} height={360}/>
          <figcaption>rm-551409 / 1TDSPG</figcaption>
        </figure>
        <figure>
        <Image src="/luis.jpg" alt='Luis' width={540} height={360}/>
          <figcaption>rm-99433 / 1TDSPG</figcaption>
        </figure>
        <figure>
        <Image src="/denden.jpg" alt='Denner' width={540} height={360}/>
          <figcaption>rm-551938 / 1TDSR</figcaption>
        </figure>
        <figure>
        <Image src="/thigaz.jpg" alt='Thiago' width={540} height={360}/>
          <figcaption>rm-99027 / 1TDSPG</figcaption>
        </figure>
        <figure>
        <Image src="/diciotech.jpg" alt='Gabriell' width={540} height={360}/>
          <figcaption>rm-98361 / 1TDSPG</figcaption>
        </figure>
      </div>
    </div>
  )
}