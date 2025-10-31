//Parte 2 - atividade 6
let precos = [20, 40, 80, 60, 30];
let precosA = aumentarP(precos);

function aumentarPrecos(precos) {
    return precos.map(function(preco) {
        return preco * 1.1; 
    });
}
console.log(precosA);

//Parte 4 - atividade 4
let preco = [200,40,90,50];
preco.forEach(function(desconto){
    console.log(`preço com descomto é: ${desconto * 0.9}`)
});