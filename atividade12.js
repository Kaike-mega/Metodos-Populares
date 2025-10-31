// Métodos Populares (nível intermediário)

// Parte 1 — filter

// 1 - Crie um array com idades e use filter() para mostrar apenas as maiores de 18
let idades = [30,12,34,19,42,9,13,10];
let maior = idades.filter(function(idade) {
return idade = idade >= 18;
});
console.log(maior);

// 2 - Crie um array com números e mostre apenas os pares
let numerosPares = [3,4,54,32,9,2,1];
let pares = numerosPares.filter(function(par){
    return par = par % 2 == 0;
});
console.log(pares);

// 3 - Dado um array de nomes, filtre os que começam com a letra "A"
let nomes = ['Ana','Lucas','Alberto','João','Murilo'];
let comA = nomes.filter(function(a){
    return a = a[0] === 'A';
});
console.log(comA);

// 4 - Crie um array de notas e mostre apenas as maiores ou iguais a 7
let notas = [3,6,2,9,8,5,7,9.5,10,8];
let maiores = notas.filter(function(s) {
    return s = s >= 7;
});
console.log(maiores);

// 5 - Dado um array de números, filtre apenas os múltiplos de 3
let numeros = [2,4,5,6,7,9,3,12,15,97];
let multiplos = numeros.filter(function(n) {
    return n = n % 3 === 0;
});
console.log(multiplos);

// Parte 2 — find

// 1 - Dado um array de frutas, encontre a primeira que seja "maçã"
let frutas = ['pera','uva','maçã','laranja'];
let fruta = frutas.find(function(maca){
    return maca === 'maçã';
});
console.log(fruta);

// 2 - Crie um array com nomes e encontre o primeiro nome com mais de 5 letras
let nome = ['Ana','Lucas','João','Roberto','Kaike'];
let letras = nome.find(function(c){
    return c.length > 5;
});
console.log(letras);

// 3 - Dado um array de números, encontre o primeiro número negativo
let numeroNegat = [2,33,5,4,-5,60,-65];
let negativo = numeroNegat.find(function(negat){
    return negat < 0;
});
console.log(negativo);

// 4 - Dado um array de preços, encontre o primeiro acima de 100
let preços = [90,40,23,55,250,42];
let acima = preços.find(function(preço){
    return preço > 100;
});
console.log(acima);

// 5 - Dado um array de palavras, encontre a primeira que tenha a letra "z"
let nomes1 = ['Ana', 'Lucas', 'Zé', 'João', 'Murilo'];
let comZ = nomes1.find(function(z){
    return z.includes('Z');
});
console.log(comZ);

//  Parte 3 — reduce

// 1 - Crie um array de números e calcule a soma deles com reduce()
let numeros2 = [30,4,44,67,53];
let soma = numeros2.reduce(function(total, valor){
    return total + valor;
});
console.log(soma);

// 2 - Crie um array com preços e calcule o total da compra.
let preços2 = [40,70,10,300,45,5];
let soma2 = preços2.reduce(function(total, valor){
    return total + valor;
});
console.log(soma2);

// 3 - Dado um array de idades, calcule a média das idades.
let idade = [12,14,12,17,11,19,18];
let soma3 = idade.reduce(function(total, valor){
    return total + valor;
});
let media = soma3 / idade.length;
console.log(media);

// 4 - Dado um array de números, calcule o produto (multiplicação) de todos.
let numeros3 = [3,4,5,8,2,7];
let multip = numeros3.reduce(function(total, valor){
    return total * valor;
});
console.log(multip)

// 5 - Dado um array de nomes, use reduce() para juntar todos em uma única string.
let nomes2 = ['João','Pedro','Marcos','Maria'];
let unica = nomes2.reduce(function(total, valor){
    return total + valor;
});
console.log(unica)

// Parte 4 — forEach

// 1 - Crie um array de nomes e exiba uma saudação para cada um usando `forEach()`
let nomes3 = ['Ana', 'Lucas', 'Zé', 'João', 'Murilo'];
nomes3.forEach(function(nome){
    console.log(`Seja bem vindo ${nome}`);
});

// 2 - Dado um array de números, exiba o dobro de cada número.
let numeros4 = [6,7,3,5,23,54,70,86,100];
numeros4.forEach(function(dobro){
    console.log(dobro * 2);
});

// 3 - Crie um array com frutas e exiba “Eu gosto de [fruta]” para cada uma.
let fruta1 = ['pera','maçã','uva','laranja'];
fruta1.forEach(function(gosto){
    console.log(`Eu gosto de ${gosto}`);
});

// 4 - Dado um array de preços, mostre no console “Preço com desconto: …” para cada um (10% de desconto).
let preços3 = [200,45,80,400,32];
preços3.forEach(function(preco){
    console.log(`Preço com desconto: ${preco * 0.9}`);
});

// 5 - Crie um array de notas e exiba “Aprovado” para notas ≥7 e “Reprovado” para notas menores.
let notas1 = [6,4,3,7,9,5,10,8];
notas1.forEach(function(nota) {
    if (nota >= 7) {
        console.log(`Nota ${nota}: Aprovado`);
    } else {
        console.log(`Nota ${nota}: Reprovado`);
    }
});

//  Parte 5 — sort

// 1 - Crie um array de números e ordene do menor para o maior.
let ordem = [6,9,50,15,90,3];
ordem.sort(function(a, b) {
  return a - b;
});
console.log(ordem);

// 2 - Crie um array de nomes e ordene em ordem alfabética.
let nome1 = ['Ana','Lucas','Alberto','João','Murilo'];
nome1.sort();
console.log(nome1);

// 3 - Crie um array de palavras e ordene em ordem decrescente.
let palavras = ['banana', 'uva', 'maçã', 'laranja', 'abacaxi'];
palavras.sort();     // ordena em ordem crescente (A → Z)
palavras.reverse();
console.log(palavras);

// 4 - Crie um array de preços e ordene do maior para o menor.
let preço1 = [30,500,23,54,21,90];
preço1.sort(function(a, b) {
  return b - a;
});
console.log(preço1);

// 5 - Crie um array com 5 idades e ordene do mais novo ao mais velho.
let idades1 = [33,53,12,24,13];
idades1.sort(function(a, b) {
  return a - b;
});
console.log(`Ordem do mais novo ao mais velho é ${idades1}`);

// Parte 6 — slice e splice

// 1 - Crie um array de frutas e use slice() para pegar apenas as duas primeiras.
let lista = ['pera', 'uva', 'maçã', 'laranja'];
let primeiras = lista.slice(0, 2);
console.log(primeiras);

// 2 - Crie um array de números e use slice() para pegar os três últimos.
let lista2 = ['pera', 'uva', 'banana', 'laranja'];
let ultimas = lista2.slice(1, 4);
console.log(ultimas);

// 3 - Crie um array e use splice() para remover o segundo item.
let lista3 = ['pera', 'uva', 'maçã', 'limão'];
let remover = lista3.splice(1, 1);
console.log(lista3);

// 4 - Crie um array de nomes e use splice() para adicionar um novo nome no meio.
let nome2 = ['Ana', 'Lucas', 'João', 'Murilo'];
nome2.splice(2, 0, 'Kaike');
console.log(nome2);

// 5 - Crie um array de palavras e use join() para formar uma frase
let palavras1 = ['Eu', 'gosto', 'de', 'programar'];
let frase = palavras1.join(' '); 
console.log(frase);















