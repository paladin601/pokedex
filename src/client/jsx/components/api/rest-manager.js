import Pokemon from './pokemon'

var scope;
export default class {
    constructor() {
        scope = this;
        this.baseURL = "https://pokeapi.co/api/v2/pokemon";
        this.pokemons = [];
    }

    async findAll() {
        if (!this.pokemons.length > 0) {
            return Promise.all([
                await fetch(this.baseURL + "?limit=1000")
                    .then(res => res.json())
                    .then(async data => {
                        let result = data.results
                        for (let i = 0; i < result.length; i++) {
                            await scope.findPokemonData(result[i].url);
                        }
                    })
            ]).then(async () => {
                return scope.pokemons;
            })
        } else {
            return Promise.all([]).then(() => {
                return scope.pokemons;
            })
        }

    }
    async findPokemonData(url) {
        await fetch(url)
            .then(res => res.json())
            .then(data => {
                //scope.pokemons.push(data);
                scope.pokemons.push(new Pokemon({
                    name: data.name,
                    id: data.id,
                    types: data.types,
                    img: data.sprites.front_default,
                })
                );
            });
    }

    getPokemonByName(name) {

    }
    async getPokemonByID(id) {
        let pokemon = this.pokemons.filter(obj => obj.id === id);
        if (!pokemon) {
            await this.findPokemonData(this.baseURL + "/" + id);
            pokemon = this.pokemons.filter(obj => obj.id === id);
        }
        return pokemon;
    }
} 