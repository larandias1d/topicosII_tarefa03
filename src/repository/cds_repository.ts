import { ICds } from "../domain/Cds";
import { IRepository } from "./IRepository";

class CdsRepository implements IRepository {
    read() : Array<ICds> {
        const lista = new Array<ICds>();
        return lista;
    }
}

export { CdsRepository }