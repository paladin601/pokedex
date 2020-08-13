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
                await fetch(this.baseURL + "?limit=100")
                    .then(res => res.json())
                    .then(async data => {
                        let result = data.results
                        for (let i = 0; i < result.length; i++) {
                            await scope.findPokemonData(result[i].url);
                        }
                    })
            ]).then(() => {
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
                    height: data.height,
                    weight: data.weight,
                    abilities: data.abilities
                })
                );
            });
    }

    getPokemonByName(name) {

    }
    async getPokemonByID(id) {
        let pokemon = this.pokemons.filter(obj => obj.id == id);
        if (!pokemon.length > 0) {
            return Promise.all([]).then(() => {
                return {
                    error: true
                }
            })
        } else {
            return Promise.all([]).then(() => {
                let index = scope.pokemons.findIndex(obj => obj == pokemon[0]);
                return {
                    pokemon: pokemon[0],
                    prePokemon: scope.getNextPrevPokemon(index)
                };
            })
        }
    }

    getNextPrevPokemon(id) {
        let out = [];
        let max = this.pokemons.length - 1;
        let next = id + 1;
        let prev = id - 1;
        if (id < 1) {
            out.push(this.getNumberIdPokemon(max));
            out.push(this.getNumberIdPokemon(next));
        } else {
            if (id == max) {
                out.push(this.getNumberIdPokemon(prev));
                out.push(this.getNumberIdPokemon(0));
            } else {
                out.push(this.getNumberIdPokemon(prev));
                out.push(this.getNumberIdPokemon(next));
            }
        }

        return out;
    }

    getNumberIdPokemon(id) {
        return {
            id: this.pokemons[id].id,
            number: this.pokemons[id].number
        }
    }
} 