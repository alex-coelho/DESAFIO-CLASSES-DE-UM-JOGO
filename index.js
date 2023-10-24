// declaração de classe, construtor e suas variaveis de propriedades
class heroiDaAventura {
    constructor(name, age, type, attack) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = attack;
    } 

    // definição de função para imprimir o ataque de acordo com o tipo de herói
    atacar(){
        switch (this.type) {

            case "guerreiro":
                console.log(`O herói ${this.type} atacou usando ${this.attack}`)
                break;
            
            case "mago":
                console.log(`O herói ${this.type} atacou usando ${this.attack}`)
                break;
            
            case "monge":
                console.log(`O herói ${this.type} atacou usando ${this.attack}`)
                break;

            case "ninja":
                console.log(`O herói ${this.type} atacou usando ${this.attack}`)
                break;

            default:
                break;
        }
    }
}

// criação dos objetos com a classe heroiDaAventrua
let ninjaGaiden = new heroiDaAventura("Ninja Gaiden",27,"ninja", "shuriken");
let magoNegro = new heroiDaAventura("Mago Negro",29,"mago", "magia");
let conan = new heroiDaAventura("Conan, o Barbáro",26,"guerreiro", "espada");
let ryu = new heroiDaAventura("Ryu",23,"monge", "artes marciais");

// utilização do método atacar de cada herói
ninjaGaiden.atacar();
magoNegro.atacar();
conan.atacar();
ryu.atacar();