//1 - crie uma função que exiba uma mensagem no console
console.log('EXERCICIO 1')

function mostrarMSG() {
    console.log('Bem vindo ao desafio');
    
    }
    mostrarMSG()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
console.log('EXERCICIO 2')

function exibirNome(Nome){
    console.log('Meu Nome é:' + Nome);
}
exibirNome('Marcos Vinicius')

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
console.log('EXERCICIO 3')

function preferido(nome,idade,estiloMusical){
    console.log("Meu nome é:" + nome);
    console.log("Minha idade é:" + idade);
    console.log("Meu estilo Musical:" + estiloMusical);
}
preferido("Marcos", 25,"Eletronica")


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
console.log('EXERCICIO 4')

function filmeMusica(filme, musica){
    console.log("Filme: "+ filme);
    console.log("Musica: "+ musica);
}
filmeMusica("Velozes e Furiosos","Lullaby")
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
console.log('EXERCICIO 5')

function triplo(N){
    return N*3;
}
console.log("O triplo é:" + triplo(3))
//6 - crie uma função que  verifique se uma  variável é true ou false
console.log('EXERCICIO 6')

let bolaPassouDaLinha = true
let isTrue = "Gol"
let isFalse = "Não foi Gol"

if(bolaPassouDaLinha == true){
    console.log(isTrue)
}else{
    console.log(isFalse)
}