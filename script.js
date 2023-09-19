
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.marca} ${this.modelo} foi ligado.`);
        } else {
            console.log(`${this.marca} ${this.modelo} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.marca} ${this.modelo} foi desligado.`);
        } else {
            console.log(`${this.marca} ${this.modelo} já está desligado.`);
        }
    }

    static verificarMarca(modelo) {
        if (modelo.toLowerCase() === 'ford') {
            console.log(`É um modelo da Ford.`);
        } else {
            console.log(`Não é um modelo da Ford.`);
        }
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    acelerar() {
        if (this.ligado) {
            console.log(`${this.marca} ${this.modelo} está acelerando.`);
        } else {
            console.log(`${this.marca} ${this.modelo} precisa ser ligado para acelerar.`);
        }
    }
}


class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    empinar() {
        if (this.ligado) {
            console.log(`${this.marca} ${this.modelo} está empinando.`);
        } else {
            console.log(`${this.marca} ${this.modelo} precisa ser ligada para empinar.`);
        }
    }
}


class Bicicleta {
    constructor(tipo) {
        this.tipo = tipo;
    }

    pedalar() {
        console.log(`A bicicleta da ${this.tipo} está pedalando.`);
    }
}


class Barco {
    constructor(nome) {
        this.nome = nome;
    }

    navegar() {
        console.log(`O barco ${this.nome} está navegando.`);
    }
}


const carro1 = new Carro("Honda", "Civic", 4);
carro1.ligar();
carro1.acelerar();

const moto1 = new Moto("Honda", "CBR600RR", "600cc");
moto1.ligar();
moto1.empinar();

Veiculo.verificarMarca("Honda");

const bicicleta1 = new Bicicleta("Caloi");
bicicleta1.pedalar();

const barco1 = new Barco("Thousand Sunny");
barco1.navegar();