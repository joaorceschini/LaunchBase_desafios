// Soma de receitas e despesas

// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

// receitas é um array
// despesas é umm array

// função calculaSaldo recebe receitas e despesas do usuario
function calculaSaldo(receitas, despesas) {
    // preciso usar a função somaNumeros()
    const somaReceitas = somaNumeros(receitas);
    const somaDespesas = somaNumeros(despesas);
    
    // deve retorna receitas - despesas
    return somaReceitas - somaDespesas;
}

// numeros é um array
function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"

    let soma = 0;
    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma;
    // retorna a soma dos números
}

// percorrendo o array de usuarios
for (let usuario of usuarios) {
    // para cada usuario chame a função calculaSaldo
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    // se saldo é positivo ou negativo
    const saldoPositivo = saldo >= 0;

    let positivoOuNegativo;
    if (saldoPositivo) {
        positivoOuNegativo = "POSITIVO";
    } else {
        positivoOuNegativo = "NEGATIVO"
    }

    console.log(`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
}