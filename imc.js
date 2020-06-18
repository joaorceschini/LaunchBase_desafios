// Cálculo de IMC

// REGRAS
// Armazenar os dados das pessoas em variaveis
// Fazer condições que exibam no console os seguintes resultados
// Se o IMC for maior ou igual a 30: Informa a pessoa que ela está acima do peso
// Se o IMC for menor que 29.9: Informar a pessoa que ela não está acima do peso, ou seja, está saldável

// INFORMAÇÕES OBTIDAS PELO DESAFIO
// Cálculo do IMC: peso / (altura * altura)
// Definir os nomes das variáveis como, name, weight e height

const name = "Doninha";
const weight = 115;
const height = 1.70;

const imc = weight / (height * height);

if (imc > 30) {
    console.log(`Você está acima do peso, que tal se alimentar melhor e fazer mais exercícios?\nSeu imc é ${imc}`)
} else {
    console.log(`Olha, parabens, você não está acima do peso, parece que seus esforços valeram a pena ;)\nSeu imc é ${imc}`)
}