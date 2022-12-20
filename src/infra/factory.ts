import { Cds_Controller } from "../controller/cds_Controller";
import { CdsRepository } from "../repository/cds_repository";
import { CdsUseCase } from "../use_cases/cds_useCase";


function criaRepositoryFactory() {
    const repo = new CdsRepository();
    return repo;
}


function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new CdsUseCase(repo);
    return useCase;
}

function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new Cds_Controller(usecase);
    return controller;
}

export { criaRepositoryFactory, criaUseCaseFactory , criaControllerFactory }