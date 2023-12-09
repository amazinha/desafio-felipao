let hero = {
    nome: "Ale",
    idade: 24,
    tipo: "ninja"

   };

class TipoHeroi {
    constructor(personagem) {
        this.personagem = personagem;
    }

    ataque() {
        let tipo = this.personagem.tipo;
        let descricaoAtaque;

        switch (tipo) {
            case "mago":
                descricaoAtaque = "usou magia";
                break;
            case "guerreiro":
                descricaoAtaque = "usou espada";
                break;
            case "monge":
                descricaoAtaque = "usou artes marciais";
                break;
            case "ninja":
                descricaoAtaque = "usou shuriken";
        }

        console.log(`O ${tipo} atacou usando ${descricaoAtaque}`);
    }
}

let ninja = new TipoHeroi(hero);
ninja.ataque();