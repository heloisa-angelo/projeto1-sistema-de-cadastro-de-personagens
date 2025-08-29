class Personagem {
    #vida
    constructor(nome, tipo, pontosDeVida){
        this.nome = nome
        this.tipo = tipo
        this.#vida = pontosDeVida
    }

    atacar(){
        
        console.log(`${this.nome} atacou!`)
    }

    mostrarInfo(){
        console.log(`Nome: ${this.nome}:
            Classe: ${this.tipo}
            Pontos de vida: ${this.#vida}`)
    }
}

module.exports = Personagem
