// Fácil (do... while)

// 1 - Exibir no console que uma criança come 1 doce, até acabar 5 doces.
let crianca = {
    nome: 'Lucas',
    doces: {
        quantidade: 5,
        comidos: 0 
    }
}

do {
    console.log(`${crianca.nome} tem ${crianca.doces.quantidade} doces e comeu ${crianca.doces.comidos} doces`);
    crianca.doces.quantidade = crianca.doces.quantidade - 1;
    crianca.doces.comidos = crianca.doces.comidos + 1;
} while (crianca.doces.quantidade > 0);

console.log(`${crianca.nome} terminou todos os doces!`);

// 2 - Mostrar que uma pessoa subiu 1 degrau da escada, até alcançar 10 degraus
let pessoa ={
    subirEscada:{
        degrausRest:10,
        quantSubidos:0
    }
}

do {
    console.log(`você subiu ${pessoa.subirEscada.quantSubidos} e faltam ${pessoa.subirEscada.degrausRest} degraus`);
    pessoa.subirEscada.degrausRest = pessoa.subirEscada.degrausRest -1;
    pessoa.subirEscada.quantSubidos = pessoa.subirEscada.quantSubidos +1;
} while (pessoa.subirEscada.degrausRest > 0);
console.log('você subiu a escada.');

// 3 - Mostrar que um motorista abasteceu 1 litro de combustível, até encher 20 litros.
let moterista ={
    tanque:{
        quntidade:0,
        abastecimento:20
    }
}

do {
    console.log(`O seu tanque está com ${moterista.tanque.quntidade} de litros`);
    moterista.tanque.quntidade = moterista.tanque.quntidade + 1;
    moterista.tanque.abastecimento =moterista.tanque.abastecimento - 1;
} while (moterista.tanque.abastecimento > 0 );
console.log('seu tanque está cheio.');

// 4 - Exibir que um aluno leu 1 página do livro, até chegar na página 15.
let aluno ={
    nome:'kaike',
    livro:{
        paginas:15,
        leu:0 
    }
};

do{
    console.log(`${aluno.nome} leu ${aluno.livro.leu}, e faltam ${aluno.livro.paginas}`);
    aluno.livro.leu = aluno.livro.leu + 1;
    aluno.livro.paginas = aluno.livro.paginas -1;
} while (aluno.livro.paginas > 0);
console.log(`${aluno.nome} leu todas as paginas.`);

// 5 - Mostrar que uma pessoa juntou 1 moeda, até ter 30 moedas
let pessoa2 = {
    moedas:{
        juntas:0,
        limite:30 
    } 
};

do {
    console.log(`você juntou ${pessoa2.moedas.juntas} moedas`)
    pessoa2.moedas.juntas = pessoa2.moedas.juntas + 1;
    pessoa2.moedas.limite = pessoa2.moedas.limite - 1;
} while (pessoa2.moedas.limite > 0);
console.log(`você conseguiu juntar ${pessoa2.moedas.juntas} moedas`);

// 6 - Exibir que um professor corrigiu 1 prova, até terminar 25 provas.
let professor ={
    provas:{
        corrigidas:0,
        quntidade:25
    }
};

do {
    console.log(`O professor corrigiu ${professor.provas.corrigidas} provas e faltem ${professor.provas.quntidade} para corrigir`);
    professor.provas.corrigidas = professor.provas.corrigidas + 1;
    professor.provas.quntidade = professor.provas.quntidade - 1;
} while (professor.provas.quntidade > 0);
console.log('O professor corrigiu todas as provas');

// 7 - Mostrar que uma impressora imprimiu 1 folha, até imprimir 12 folhas. 
let impressora ={ 
    imprimir:{
        feitas:0,
        faltas:12
    }
};

do {
    console.log(`A impressora imprimiu ${impressora.imprimir.feitas} folhas e faltam ${impressora.imprimir.faltas}`);
    impressora.imprimir.feitas = impressora.imprimir.feitas + 1;
    impressora.imprimir.faltas = impressora.imprimir.faltas - 1;
} while (impressora.imprimir.faltas > 0);
console.log('todas as folhas foram imprimidas');

// 8 - Exibir que um fazendeiro colheu 1 fruta, até colher 18 frutas.
let fazendeiro = {
    frutas: {
        colhidas:0,
        fruta:18
    }
};

do {
    console.log(`Fazendeiro conheu ${fazendeiro.frutas.colhidas} frutas e faltam ${fazendeiro.frutas.fruta}`)
    fazendeiro.frutas.colhidas = fazendeiro.frutas.colhidas + 1;
    fazendeiro.frutas.fruta = fazendeiro.frutas.fruta - 1;
} while (fazendeiro.frutas.colhidas < 18);
console.log('o fazendeiro colheu todas as frutas');

// 9 - Mostrar que uma pessoa deu 1 passo, até andar 50 passos.
let pessoa3 ={
    passo:0 
};

do {
    console.log(`você andou ${pessoa3.passo} passos`);
    pessoa3.passo = pessoa3.passo + 1;
} while (pessoa3.passo < 51);

// Médio 

// 1 - Um jogador começa com 3 vidas. A cada erro perde 1 vida. Mostrar até o jogo acabar.
let jogador ={
    vida:{
        vidas:3,
        erro:0
    }
}
do {
    console.log(`Você tem ${jogador.vida.vidas} vidas | total de erros: ${jogador.vida.erro}`);
    jogador.vida.erro = jogador.vida.erro + 1;
    jogador.vida.vidas = jogador.vida.vidas - 1;
} while (jogador.vida.erro < 4);
console.log('Fim de jogo');

// 2 - Um celular começa com 100% de bateria e perde 10% a cada hora de uso. Mostrar até desligar.
let celular ={
    tempoUso:0,
    bateria:100,
}
do {
    console.log(`Bateria do celular ${celular.bateria}% | Tempo de uso ${celular.tempoUso} horas`);
    celular.bateria = celular.bateria - 10;
    celular.tempoUso = celular.tempoUso + 1;
} while (celular.bateria > 0);
console.log('A bateria do celular acabou');

// 3 - Uma pizzaria tem 8 fatias de pizza. Mostrar cada fatia que foi comida até acabar.
let pizzaria ={
    fatias:8,
    comidas:0
};

do {
    console.log(`Fatias comidas: ${pizzaria.comidas} | Fatias restantes: ${pizzaria.fatias}`)
    pizzaria.comidas = pizzaria.comidas + 1;
    pizzaria.fatias = pizzaria.fatias - 1;
} while (pizzaria.fatias > 0 );
console.log('Todas as fatias foram comidas');

// 4 - Uma lanchonete começa o dia com 20 refrigerantes. Mostrar a venda de cada um até zerar.
let lanchonete ={
    comidas:{
        refrigerantes: 20
    },
    vendas:{
        Vrefrigerantes:0
    }
};
do {
    console.log(`Refrigerantes vendidos: ${lanchonete.vendas.Vrefrigerantes} | Refrigerantes restantes: ${lanchonete.comidas.refrigerantes}`);
    lanchonete.vendas.Vrefrigerantes = lanchonete.vendas.Vrefrigerantes + 1
    lanchonete.comidas.refrigerantes = lanchonete.comidas.refrigerantes - 1
} while (lanchonete.vendas.Vrefrigerantes < 21);
console.log('todos os refrigerantes foram vendidos');

// 5 - Um aluno precisa estudar 30 minutos por dia. Mostrar no console os dias de estudo até completar 7 dias.
let aluno2 ={
    TempoEstudos:0,
    dias:0
}
do {
    console.log(`Tempo de estudos: ${aluno2.TempoEstudos} | dias: ${aluno2.dias}`);
    aluno2.TempoEstudos = aluno2.TempoEstudos + 30;
    aluno2.dias = aluno2.dias + 1;
} while (aluno2.dias < 8);

// 6 - Uma conta bancária começa com R$ 500. Mostrar os saques de R$ 50 até acabar o saldo.
let conta = {
    saldo: 500,
    saque: 50
};

do {
    console.log(`Saldo atual: R$${conta.saldo}`);
    conta.saldo -= conta.saque;
} while (conta.saldo > 0);

console.log('Saldo zerado.');

// 7 - Um ônibus tem 40 lugares. Mostrar cada passageiro entrando até encher o ônibus.
let onibus = {
    lugares: 40,
    ocupados: 0
};

do { 
    console.log(`Passageiro ${onibus.ocupados} entrou. Lugares ocupados: ${onibus.ocupados}/${onibus.lugares}`);
    onibus.ocupados = onibus.ocupados + 1
} while (onibus.ocupados < 41)

console.log("Ônibus lotado! Ninguém mais pode entrar.");

// 8 - Um balde tem capacidade para 10 litros de água. Mostrar cada litro adicionado até encher.
let balde = {
    capacidade: 10,
    litros: 0
};

do {
    console.log(`Adicionado 1 litro. O balde agora tem ${balde.litros}/${balde.capacidade} litros.`);
    balde.litros = balde.litros + 1;
} while (balde.litros < 10);
console.log("O balde está cheio!");

// 9 - Uma pessoa quer economizar R$ 1000 guardando R$ 100 por mês. Mostrar os meses até alcançar a meta.
let poupanca = {
    deposito: 0,
    meses: 0
};

do {
    console.log(`Mês ${poupanca.meses} | saldo atual = R$${poupanca.deposito}`);
    poupanca.meses = poupanca.meses + 1;
    poupanca.deposito = poupanca.deposito + 100;
} while (poupanca.deposito < 1000);

console.log(`Meta de R$${poupanca.deposito} alcançada em ${poupanca.meses} meses!`);

// 10 - Um carro percorre 10 km por litro. Mostrar a quilometragem percorrida até gastar 5 litros.
let carro = {
    kmPorLitro: 10,
    litros: 5,
    percorrido: 0
};

do {
    carro.percorrido = carro.percorrido + carro.kmPorLitro;
    carro.litros = carro.litros - 1;
    console.log(`Rodou ${carro.percorrido} km. Litros restantes: ${carro.litros}`);
} while (carro.litros > 0);

console.log("O combustível acabou! ");

// Difício

// 2 - Uma loja começa o mês com 100 produtos e vende 7 por dia. Mostrar até zerar o estoque.
let loja ={
    produtos: 100,
    dias:0
}

do {
    console.log(`Produtos: ${loja.produtos} | dias: ${loja.dias} `)
    loja.produtos = loja.produtos - 7;
    loja.dias = loja.dias + 1
} while (loja.produtos > 0);
console.log(`todos os produtos foram vendidos em ${loja.dias}`)

// 3 - Um cliente faz compras e paga R$ 50 por vez. Mostrar até gastar R$ 300.
let cliente ={
    compras:0,
    vezes:0,
}
do {
  console.log(`Numero de compras: ${cliente.vezes} | dinheiro gastos: ${cliente.compras}`)
  cliente.vezes = cliente.vezes + 1;
  cliente.compras = cliente.compras + 50; 
} while (cliente.compras < 301);

// 4 - Uma família economiza R$ 200 por mês. Mostrar até juntar R$ 2000.
let familia ={
    economia:0,
    messes:0 
};
do {
    console.log(`Dinheiro economizado: ${familia.economia} | Numero de messes: ${familia.messes}`);
    familia.economia = familia.economia + 200;
    familia.messes = familia.messes + 1;
} while (familia.economia < 2001);

// 5 - Um avião precisa percorrer 3000 km. Mostrar o avanço de 500 km por trecho até chegar ao destino.
let aviao ={
    precisa:3000,
    percorreu:0,
}
do {
    console.log(`Distancia percorida: ${aviao.percorreu} | Distancia restante: ${aviao.precisa}`);
    aviao.percorreu = aviao.percorreu + 500;
    aviao.precisa = aviao.precisa - 500
} while (aviao.percorreu < 3001);
console.log('O avião chegou a seu destino');

// 6 - Um tanque tem 60 litros de gasolina. Mostrar o consumo de 8 litros por viagem até ficar vazio.
let tanque ={
    gasolina: 60,
};
do {
    console.log(`Gasolina restante no tenque ${tanque.gasolina}`);
    tanque.gasolina = tanque.gasolina - 8;
} while (tanque.gasolina > 0);
console.log('O tanque está vazio')

// 7 - Uma pessoa lê um livro de 120 páginas, 7 páginas por dia. Mostrar até terminar o livro.
let pessoa4 ={
    livro:120,
    dia:0
}

do {
    console.log(`Paginas para ler: ${pessoa4.livro} | Dias: ${pessoa4.dia}`);
    pessoa4.dia = pessoa4.dia + 1;
    pessoa4.livro = pessoa4.livro - 7;
} while (pessoa4.livro > 0 );
console.log(`Livro terminado em ${pessoa4.dia} dias`);

// 8 - Uma escola tem 35 alunos. Mostrar cada aluno saindo da sala até esvaziar.
let escola ={
    alunos:{
        foraSala:0,
        dentroSala:35
    }
}
do {
    console.log(`Numeros de alunos na sala: ${escola.alunos.dentroSala} | Numaros de alunos fora da sala: ${escola.alunos.foraSala}`);
    escola.alunos.dentroSala = escola.alunos.dentroSala -1
    escola.alunos.foraSala = escola.alunos.foraSala + 1
} while (escola.alunos.dentroSala > 0 );
console.log('todos os alunos estam fora da sala');

// 9 - Um celular envia mensagens de 5 em 5, até chegar em 50 mensagens.
let celular2 ={
    mensagens:0
}
do {
    console.log(`Você tem ${celular2.mensagens} mensagens pendentes`);
    celular2.mensagens = celular2.mensagens + 5;
} while (celular2.mensagens <= 50);

// 10 - Uma fábrica produz 12 peças por hora. Mostrar até fabricar 120 peças.
let fabrica ={
    produz:0,
    horas:0
}
do {
    console.log(`Produtos produzidos: ${fabrica.produz} em ${fabrica.horas} horas`)
    fabrica.produz = fabrica.produz + 12;
    fabrica.horas = fabrica.horas + 1;
} while (fabrica.produz < 121);