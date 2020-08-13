export default class {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.types = data.types;
        this.img = data.img;
        this.getNumberPokemon(this.id);
    }
    getNumberPokemon(id) {
        let number = "#";
        if (id < 10) {
            number += "0000" + id;
        } else {
            if (id < 100) {
                number += "000" + id;
            } else {
                if (id < 1000) {
                    number += "00" + id;
                } else {
                    if (id < 10000) {
                        number += "0" + id;
                    } else {
                        number += id;
                    }
                }
            }
        }
        this.number = number;
    }
}