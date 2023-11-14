import { promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function POST(request, response){
    try{

        const userRequest = await request.json();
        
        const file = await fs.readFile(
            process.cwd() + "/src/apop/api/base/db.json","utf8"
        );
            
        const lista = await JSON.parse(file);
            
        const newId = lista.usuarios[lista.usuarios.length - 1].id +1;
            
        userRequest.id = newId;
            
        lista.usuarios.push(userRequest);
            
        await fs.writeFile(
            process.cwd() + "/src/app/api/base/db.json",
            JSON.stringify(lista)
        );
            
        return NextResponse.json(userRequest);
        
    } catch (error){
        return NextResponse.json(null)
    }
}