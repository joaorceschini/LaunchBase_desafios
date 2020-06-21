// Busca por tecnologia

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

const usuarios = [
    { nome: "João", tecnologias: ["HTML", "CSS"] },
    { nome: "Rafael", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Mateus", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false

    for ( let tecnologia of usuario.tecnologias ) {
        const encontreiTecnologiaCSS = tecnologia === "CSS"
        if ( encontreiTecnologiaCSS ) {
            return true;
        }
    }

    return false;
}

for ( let usuario of usuarios ) { 
    const esteUsuarioPossuiCSS = checaSeUsuarioUsaCSS(usuario)

    if ( esteUsuarioPossuiCSS ) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`)
    }
}