export default class {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.types = data.types;
        this.img = data.img || "https://e7.pngegg.com/pngimages/993/363/png-clipart-pokeball-pokeball.png";
        this.height = data.height;
        this.weight = data.weight;
        this.abilities = data.abilities;
        this.heightM = this.getConvertHW(this.height);
        this.weightK = this.getConvertHW(this.weight);
        this.getNumberPokemon(this.id);
    }

    getConvertHW(value) {
        return value / 10
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