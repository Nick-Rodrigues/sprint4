import Image from "next/image"
import "./notfound.modules.css"

export default function notFound() {
    return (
        <div className="erro404">
            <h1>OOPSS! 404</h1>
    
                <Image
                    src="https://http.cat/images/404.jpg"
                    alt="404"
                    width={500}
                    height={500}
                />
    
            <p>Not Found!</p>
        </div>
      )
    }
