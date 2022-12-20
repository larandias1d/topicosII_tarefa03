"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cds = void 0;
class Cds {
    constructor(titulo, artista, genero) {
        this.titulo = titulo;
        this.artista = artista;
        this.genero = genero;
    }
    get gettitulo() {
        return this.titulo;
    }
    get getartista() {
        return this.artista;
    }
    get getgenero() {
        return this.genero;
    }
}
exports.Cds = Cds;
