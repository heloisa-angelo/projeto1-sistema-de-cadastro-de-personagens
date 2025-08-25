const Personagem = require('./Personagem')

const bucaneiro = new Personagemm('Raven', 'Bucaneiro', 120)

const guerreira = new Personagem('Evelin', 'Guerreira', 170)

const arqueiro = new Personagem('Bia', 'Arqueiro', 60)

bucaneiro.mostrarInfo()
bucaneiro.atacar()

guerreira.mostrarInfo()
guerreira.atacar()

arqueiro.mostrarInfo()
arqueiro.atacar()
