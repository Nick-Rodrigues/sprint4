import Image from "next/image";
import Link from "next/link";
import "./rodape.modules.css";

export default function Rodape() {
  return (
    <>
      <footer className="rodape">
        <div className="footer">
          <figure>
            <figcaption></figcaption>
            <Link rel="noreferrer" href="https://github.com" target="_blank">
              <Image className="instag" src="/github.png" alt="Github" width={50} height={50} />
            </Link>
          </figure>
          <figure>
            <figcaption></figcaption>
            <Link
              rel="noreferrer"
              href="https://www.instagram.com/portoseguro/"
              target="_blank"
            >
              <Image className="git-hub"
                src="/instagram.png"
                alt="Instagram"
                width={50}
                height={50}
              />
            </Link>
          </figure>
        </div>
      </footer>
    </>
  );
}
