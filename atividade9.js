// (Funções)

// Fácil

// 1 - Crie uma função que exiba "Olá, Mundo!" no console.
function cumprimento() {
    console.log("Olá, Mundo!");
}
cumprimento();

// 2 - Crie uma função que receba um número e retorne ele ao quadrado.
function quadrado(Numero) {
    return Numero * Numero;
}
console.log(quadrado(5));

// 3 - Crie uma função que receba dois números e retorne a soma.
function soma(a, b) {
    return a + b;
}
console.log(soma(8, 9));

// 4 - Crie uma função que exiba seu nome no console.
function seuNome(nome) {
    console.log("Meu nome é Kaike");
}
seuNome();

// 5 - Crie uma função que receba dois números e retorne o maior.
function maior(N1, N2) {
    if (N1 > N2) {
        return N1
    } else if (N1 < N2) {
        return N2
    } else {
        return "Os dois numeros são iguais"
    }
}
console.log(maior(30, 60));

// 6 - Crie uma função que receba um número e retorne se ele é par.
function par(Numero) {
    if (Numero % 2 == 0) {
        return Numero;
    } else {
        return 'invalido';
    }
}
console.log(par(30));

// 7 - Crie uma função que receba um número e retorne se ele é ímpar.
function impar(Numero) {
    if (Numero % 2 == 0) {
        return 'invalido';
    } else {
        return Numero;
    }
}
console.log(impar(31));

// 8 - Crie uma função que receba a idade e retorne se pode votar (≥ 16).
function idade(idade) {
    if (idade >= 16) {
        return idade;
    } else {
        return 'invalido';
    }

}
console.log(idade(19));

// 9 - Crie uma função que multiplique um número por 10.
function multi(numero) {
    return numero * 10;
}
console.log(multi(9));

// 10 - Crie uma função que receba um nome e retorne uma frase: "Bem-vindo, [nome]!".
function boasVindas(nome) {
    return `Bem-vindo, ${nome}!`;
}
console.log(boasVindas('Kaike'));

// Médio

// 1 - Crie uma função que receba 3 números e retorne a média.
function media(a, b, c) {
    return (a + b + c) / 3;
}
console.log(media(5, 7, 9));

// 2 - Crie uma função que receba a base e altura de um triângulo e retorne a área.
function ariaTri(base, altura) {
    return base * altura / 2;
}
console.log('A ária do triângulo é: ' + ariaTri(6, 8));

// 3 - Crie uma função que receba um número e retorne sua tabuada (até 10).
function tabuada(numero) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero * i}\n`;
    }
    return resultado;
}
console.log(tabuada(7));

// 4 - Crie uma função que receba um objeto com nome e idade e retorne "Nome: X, Idade: Y".
function pessoa(pessoa1) {
    return `Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}`;
};
let pessoa1 = {
    nome: "kaike",
    idade: 16
};
console.log(pessoa(pessoa1));

// 5 - Crie uma função que receba um número e retorne verdadeiro se for primo.
function ehPrimo(numero) {
    if (numero < 2) return false;
    if (numero === 2 || numero === 3 || numero === 5 || numero === 7) return true;
    if (numero % 2 === 0) return false;
    if (numero % 3 === 0) return false;
    if (numero % 5 === 0) return false;
    if (numero % 7 === 0) return false;
    return true;
}
console.log("é primo?", ehPrimo(19));


// 6 - Crie uma função que receba dois números e retorne o MDC (Máximo Divisor Comum).
function mdc(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
console.log(mdc(160, 50));

// 7 - Crie uma função que receba um array de números e retorne o maior número.
function maiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
console.log(maiorNumero([20, 5, 10, 80]));

// 9 - Crie uma função que receba um número e retorne todos os números pares até ele.
function pares(numero) {
    let restantes = "";
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            restantes += `${i}\n`;
        }
    }
    return restantes;
}
console.log(pares(20));

// 10 - Crie uma função que receba dois números e retorne todos os números entre eles.
function entreEles(N1, N2) {
    let entre = "";
    for (let i = N1; i <= N2; i++) {
        entre += `${i}\n`;
    }
    return entre;
}
console.log(entreEles(3, 20));

// Projeto: Sistema de Loja Virtual 

// 1 - Função para calcular desconto.
function calcularDesconto(valor, percentual) {
    let desconto = (valor * percentual) / 100;
    return valor - desconto;
}

// 2 - Função para calcular total da compra.
function calcularTotal(produtos) {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco * produtos[i].quantidade;
    }
    return total;
}

// 3 - Função para verificar se o cliente tem frete grátis.(até 5 km de distância)
function verificarFreteGratis(distanciaKm) {
    return distanciaKm <= 5;
}
