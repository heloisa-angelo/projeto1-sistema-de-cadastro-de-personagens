const Character = require('./class/Character')

const bucaneiro = new Character('Raven', 'Bucaneiro', 120)

const guerreira = new Character('Evelin', 'Guerreira', 170)

const arqueiro = new Character('Bia', 'Arqueiro', 60)

bucaneiro.showInfo()
bucaneiro.attack()

guerreira.showInfo()
guerreira.attack()

arqueiro.showInfo()
arqueiro.attack()
