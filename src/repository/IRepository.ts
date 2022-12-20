import { ICds } from "../domain/Cds";

interface IRepository {
    read(): Array<ICds>;
}

export { IRepository }