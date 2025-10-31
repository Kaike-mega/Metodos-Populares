// callback
//Fáceis

// 1 - Crie uma função que receba um número e um callback que exiba esse número no console.
function receber(a, callback) {
    callback(a);
}

// 2 - Crie uma função que receba dois números e um callback que exiba a soma deles.

function resultado(a,b,callback) {
    let soma = a + b;
    callback(soma);
}

// 3 - Crie uma função que receba um nome e um callback que exiba “Olá, [nome]”.
function seuNome(nome, callback) {
    callback(`Olá, ${nome}`);

}

// 4 - Crie uma função que receba uma idade e um callback que exiba “Maior de idade” ou “Menor de idade”.
function suaIdade(idade, callback) {
    if (idade >= 18) {
        callback('Maior de idade');
    } else {
        callback('Menor de idade');
    }
} 

// 5 - Crie uma função que receba um número e um callback que exiba se ele é par ou ímpar.
function valor(a, callback) {
    if (a % 2 === 0) {
        callback(`O numero ${a} é par`);
    } else {
        callback(`O numero ${a} é impar`);
    }
}

// 6 - Crie uma função que receba uma string e um callback que exiba a quantidade de caracteres.
function valores(texto, callback) {
    const quantidade = texto.length;
    callback(`A string "${texto}" possui ${quantidade} caracteres.`);
}

// 7 - Crie uma função que receba um array de nomes e um callback que mostre o primeiro nome.
function primeroNome(nomes, callback) {
    const primeiro = nomes[0];
    callback(`O primeiro nome é: ${primeiro}`);
}

// 8 - Crie uma função que receba um número e um callback que exiba o dobro desse número.
function dobro(a,callback) {
    let dobro = a * 2;
    callback(`O dobro do numero ${a} é ${dobro}`);
}

// 9 - Crie uma função que receba um objeto {nome, idade} e um callback que exiba “Fulano tem X anos”.
let pessoa ={
    nome:'lucas',
    idade: 25
};

function ficha(objeto, callback) {
    callback(`${objeto.nome} tem ${objeto.idade} anos`);
}

// 10 - Crie uma função que receba uma nota e um callback que classifique como “Aprovado” ou “Reprovado”.
function nota(a, callback) {
    if (a >= 5) {
        callback('Aprovado')
    } else {
        callback('Reprovado')
    }
};

receber(3,console.log);//Ex. 1
resultado(4,8,console.log);//Ex. 2
seuNome('kaike',console.log);//Ex. 3
suaIdade(16, console.log);//Ex. 4
valor(16, console.log);//Ex. 5
valores('eu sou o homem de ferro', console.log);//Ex. 6
primeroNome(['kaike', 'mairia', 'lucas'], console.log);//Ex. 7
dobro(6, console.log);//Ex. 8
ficha(pessoa, console.log);//Ex. 9
nota(7, console.log);//Ex. 10

// Médios

// 11 - Verificador de temperatura
function temperatura(graus, callback) {
    if (graus > 30) {
        callback('Está quente')
    } else {
        callback('Temperatura agradável')
    }
}

// 12 - Sistema de notas
function sistemaNotas(a, callback) {
    switch (true) {
        case(a >= 9):
            callback('Excelente')
            break;
        case(a >= 7 && a < 9):
            callback('Bom')
            break;
        case(a >= 5 && a < 7):
            callback('Regular')
            break;
        case(a < 5):
            callback('Insuficiente')
            break;
        default:
            callback('invalido')
            break;
    }
}

// 13 - Tipo de número
function numero(a, callback) {
    if (a > 0){
        callback('Positivo')
    } else if (a < 0) {
        callback('Negativo')
    } else {
        callback('Zero')
    }
}

// 14 - Verificador de login
let pc ={
    usuario: 'admin',
    senha: 1234
}
function asseso(objeto, callback) {
    if (objeto.usuario == 'admin' && objeto.senha === 1234) {
        callback('Acesso permitido');
    } else {
        callback('Acesso negado');
    }
}

// 15 - Sistema de frete
function calcularFrete(estado, callback) {
  switch (estado) {
    case "SP":
      callback('Para o SP o falor do frete é R$ 10');
      break;
    case "RJ":
      callback('Para o RJ o falor do frete é R$ 15');
      break;
    case "MG":
      callback('Para o MG o falor do frete é R$ 12');
      break;
    default:
      callback('O falor do frete é R$ 20');
  }
}

// 16 - Comparador de números
function comparador(a,b,callback) {
    if (a > b) {
        callback(`O maior número é ${a}`)
    } else if (a < b) {
        callback(`O maior número é ${b}`)
    } else {
        callback('Os números são iguais')
    }
}

// 17 - Classificação de IMC
function classificação(imc,callback) {
    switch (true) {
        case(imc < 18.5):
            callback('Abaixo do peso')
            break;
        case(imc >= 18.5 && imc < 25):
            callback('Peso normal')
            break;
        case(imc >= 25 && imc < 30):
            callback('Sobrepeso')
            break;       
        case(imc >= 30):
            callback('Obesidade')
            break;            
        default:
            callback('Invalido')
            break;
    }
}

// 18 - Dia da semana
function dias(dia ,callback) {
    switch (true) {
        case(dia == 1):
            callback('Domingo')
            break;
        case(dia == 2):
            callback('Segunda-feira')
            break;
        case(dia == 3):
            callback('Terça-feira')
            break;            
        case(dia == 4):
            callback('Quarta-feira')
            break;            
        case(dia == 5):
            callback('Quinta-feira')
            break;
        case(dia == 6):
            callback('Sexta-feira')
            break;
        case(dia == 7):
            callback('Sábado')
            break;
        default:
            callback('Número inválido!')
            break;
    }
}

// 19 - Avaliação de crédito
function avaliarCredito(pontuacao, callback) {
  if (pontuacao >= 700) {
    callback("Bom crédito");
  } else if (pontuacao >= 500) {
    callback("Regular");
  } else {
    callback("Reprovado");
  }
}

// 20 - Desconto por tipo de cliente
function desconto(tipo, callback) {
    switch (true) {
        case (tipo === 'Ouro'):
            callback('Desconto de 20%');
            break;
        case (tipo === 'Prata'):
            callback('Desconto de 10%');
            break;
        case (tipo === 'Bronze'):
            callback('Desconto de 5%');
            break;
        default:
            callback('Desconto de 0%');
            break;
    }
}




















temperatura(25, console.log);//Ex. 11
sistemaNotas(7, console.log);//Ex. 12
numero(-2, console.log);//Ex. 13
asseso(pc, console.log);//Ex. 14
calcularFrete('MG', console.log);//Ex. 15 
comparador(3,5,console.log);//Ex. 16
classificação(27,console.log);//Ex. 17
dias(6,console.log);//Ex. 18
avaliarCredito(600,console.log);//Ex. 19
desconto('Prata', console.log);//Ex. 20