"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cds_Controller = void 0;
class Cds_Controller {
    constructor(cds_usecase) {
        console.log(typeof cds_usecase);
        console.log(cds_usecase);
        this.cds_usecase = cds_usecase;
    }
    listar_cds(req, resp) {
        const cds = this.cds_usecase.recuperaCds();
        return resp.status(200).json(cds);
    }
}
exports.Cds_Controller = Cds_Controller;
