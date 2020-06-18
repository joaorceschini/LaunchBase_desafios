// Cálculo de aposentadoria

// REGRAS
// Armazenar os dados das pessoas em variaveis
// Calcular se a pessoa está apta ou não para se aposentar
// Fazer condições que exibam no console os seguintes resultados:
// Se a pessoa estiver dentro dos requisitos: Pessoa, você pode se aposentar
// Se a pessoa não estiver dentro dos requisitos: Pessoa, você ainda não pode se aposentar

// INFORMAÇÕES OBTIDAS PELO DESAFIO
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos
// A soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma

const person = {
    name: "Rafael",
    gender: "M",
    age: 40,
    contribution: 32
}

var congrats = `Parabéns ${person.name}, você já pode se aposentar.`;
var contribM = `${person.name} você precisa ter, no mínimo, 35 anos de contribuição\nVocê contribuiu por ${person.contribution} anos`;
var contribF = `${person.name} você precisa ter, no mínimo, 30 anos de contribuição\nVocê contribuiu por ${person.contribution} anos`;
var requirements = `${person.name} você ainda não pode se aposentar. Não cumpre os requisitos mínimos`;

if (person.gender == "M") {

    if (person.contribution >= 35) {
        if (person.age + person.contribution >= 95) {
            console.log(congrats)
        } else {
            console.log(requirements)
        }
    } else {
        console.log(contribM)
    }

} else if (person.gender == "F") {

    if (person.contribution >= 30) {
        if (person.age + person.contribution >= 85) {
            console.log(congrats)
        } else {
            console.log(requirements)
        }
    } else {
        console.log(contribF)
    }
    

} else if (person.gender == "") {

    console.log("Você não definiu seu sexo, para calcularmos se você poderá se aposentar precisamos dela.\nVocê pode defini-lo como M (masculino) ou F (feminino)")

} else {

    console.log("Provavelmente você definiu um sexo invalido...\nDefina seu sexo como M (masculino) ou F (feminino)")

}
