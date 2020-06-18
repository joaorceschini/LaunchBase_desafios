// Desafio para fortalecer os conceitos de objetos e vetores no JS

// Contrução e impressão de objetos

// INFO DO DESAFIO
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado "company". Os dados a serem armazenados são:
// Name: Rocketseat
// Color: Roxo
// Focus: Prografação
// Address: street: Rua João da Serra, number: 260
// Faça com que seja escrito mo console um texto que exiba as informações da empresa


const company = {
    name: "Rocketseat",
    color: "Roxo",
    focus: "Programação",
    address: {
        street: "Rua João da Serra",
        number: 260
    }
}

console.log(`A empresa ${company.name}, de cor ${company.color}, focada em ${company.focus}, está localizada em ${company.address.street}, ${company.address.number}.`)