interface ICds {
    titulo: string;
    artista: string
    genero: Genero
}

export type Genero = 'Pop' | 'Rock' | 'Reggae' | 'Trap' | 'K-pop'

class Cds implements ICds {
    titulo: string;
    artista: string
    genero: Genero

    constructor(titulo: string, artista: string, genero: Genero) {
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

export { ICds, Cds }