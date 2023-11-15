import { NextResponse } from "next/server";

export async function GET(){
    const cadastro = {
        login: "Nicolas",
        nome: "Nicolas",
        senha: 123,
        email: "nicolas@gmail.com",
        cpf: 12345678901,
        rg: 123456789,
        nascimento: "09/02/2002",
        cep: 90060140,
        marca: "Caloi",
        modelo: "Caloi 10",
        nf: 896321
    }

    return NextResponse.json(cadastro);
}