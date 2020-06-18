// Vetores e Obejtos

// INFO DO DESAFIO
// Criar um programa com um objeto para armazenar dados de um programador, como name, age, technologies que trabalha
// Armazenar as tecnologias em um array
/* As technologies tambem precisam ser objetos contendo name and specialty, use as technologies a baixo:
    { nome: 'C++', especialidade: 'Desktop' }
    { nome: 'Python', especialidade: 'Data Science' }
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
*/
// Por fim, imprima na tela o name and specialty da primeira tecnologia que o usuário utiliza


const user = {
    name: "João",
    age: 14,
    technologies: [
        { name: 'JavaScript', specialty: 'Web/Mobile' },
        { name: 'Python', specialty: 'Data Science' },
        { name: 'C++', specialty: 'Desktop' }
    ]
}

console.log(`O usuário ${user.name} tem ${user.age} anos e usa a tecnologia ${user.technologies[0].name} com especialidade em ${user.technologies[0].specialty}.`)