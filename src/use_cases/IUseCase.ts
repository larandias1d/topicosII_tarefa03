import { Genero, ICds } from "../domain/Cds"

interface IUseCase {
    recuperaCds(): ICds[];
    getFromType(type:Genero): ICds[] ;
    getFromName(artista:string): ICds[]
}

export { IUseCase }