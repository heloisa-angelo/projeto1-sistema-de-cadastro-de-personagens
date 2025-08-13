class Character {
    #life
    constructor(name, type, lifePoints){
        this.name = name
        this.type = type
        this.#life = lifePoints
    }

    attack(){
        
        console.log(`${this.name} atacou!`)
    }

    showInfo(){
        console.log(`Nome: ${this.name}:
            Classe: ${this.type}
            Pontos de vida: ${this.#life}`)
    }
}

module.exports = Character
