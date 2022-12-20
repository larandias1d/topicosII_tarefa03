"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdsUseCase = void 0;
class CdsUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    recuperaCds() {
        const cds = data;
        return cds;
    }
    getFromType(type) {
        return data.filter(item => {
            if (item.genero === type) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    getFromName(titulo) {
        return data.filter(item => item.titulo.toLowerCase().indexOf(titulo.toLowerCase()) > -1);
    }
}
exports.CdsUseCase = CdsUseCase;
const data = [
    {
        titulo: 'Midnight Memories',
        artista: 'One Direction',
        genero: 'Pop',
    },
    {
        titulo: 'Persona',
        artista: 'BTS',
        genero: 'K-pop',
    },
    {
        titulo: 'Save Rock and Roll ',
        artista: 'Fall out Boy',
        genero: 'Rock',
    },
    {
        titulo: '7 Vezes',
        artista: 'O Rappa',
        genero: 'Reggae',
    },
    {
        titulo: 'Audaz',
        artista: 'Filipe Ret',
        genero: 'Trap',
    }
];
