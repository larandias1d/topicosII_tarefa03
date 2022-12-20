import { Request, Response } from 'express';
import { IUseCase } from '../use_cases/IUseCase';

class Cds_Controller {

    cds_usecase: IUseCase;

    constructor(cds_usecase: IUseCase) {
        console.log(typeof cds_usecase)
        console.log(cds_usecase)
        
        this.cds_usecase = cds_usecase;
    }

    listar_cds(req: Request, resp: Response) {

        const cds = this.cds_usecase.recuperaCds();
        return resp.status(200).json(cds)
    }

}

export { Cds_Controller };