import { ICds, Cds, Genero } from '../domain/Cds'
import { IRepository } from '../repository/IRepository';
import { IUseCase } from './IUseCase';


class CdsUseCase implements IUseCase {
    repo: IRepository;
    cds: Cds;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    recuperaCds(): ICds[] {
        const cds = data
        return cds
    }
    getFromType(type:Genero): ICds[]  {
        return data.filter(item =>{
            if(item.genero === type){
                return true;
            } else {
                return false;
            }
        });
    }

    getFromName(titulo:string): ICds[]  {
        return data.filter(item => 
            item.titulo.toLowerCase().indexOf(titulo.toLowerCase())> -1
            );        
    }  
}

const  data: ICds[] = [
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
]

export { CdsUseCase }