function calculadoraNivel(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas;
    let nivelDoHeroi;

    if(vitorias < 10) {
    nivelDoHeroi = "Ferro"
    } else if(vitorias >= 11 && vitorias <= 20) {
    nivelDoHeroi = "Bronze"
    } else if(vitorias >= 21 && vitorias <= 50) {
    nivelDoHeroi = "Prata"
    } else if(vitorias >= 51 && vitorias <= 80) {
    nivelDoHeroi = "Ouro"
    } else if(vitorias >= 81 && vitorias <= 90) {
    nivelDoHeroi = "Diamante"
    } else if(vitorias >= 91 && vitorias <= 100) {
    nivelDoHeroi = "Lendário"
    } else {
    nivelDoHeroi = "imortal"
    } 

    return{saldoDeVitorias: saldoDeVitorias, nivelDoHeroi: nivelDoHeroi};
}
var vitorias = 10;
var derrotas = 5;
var resultado = calculadoraNivel(vitorias, derrotas);



console.log("O herói tem um saldo de " + saldoDeVitorias + "e está no nível de " + nivelDoHeroi)