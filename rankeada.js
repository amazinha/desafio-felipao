let vitorias = 45
let derrotas = 29

let pontuacao = (vitorias - derrotas) 
let nivel;

switch (true) {
    case pontuacao <= 10:
        nivel = "ferro";
        break;
    case pontuacao <= 20:
        nivel = "bronze";
        break;
    case pontuacao <= 50:
        nivel = "prata";
        break;
    case pontuacao <= 80:
        nivel = "ouro";
        break;
    case pontuacao <= 90:
        nivel = "diamante";
        break;
    case pontuacao <= 100:
        nivel = "lendario";
        break;
    default:
        nivel = "imortal";
        break;
}

console.log("O Herói tem de saldo de " + pontuacao + " está no nível de " + nivel);

