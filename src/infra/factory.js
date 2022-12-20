"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criaControllerFactory = exports.criaUseCaseFactory = exports.criaRepositoryFactory = void 0;
const cds_Controller_1 = require("../controller/cds_Controller");
const cds_repository_1 = require("../repository/cds_repository");
const cds_useCase_1 = require("../use_cases/cds_useCase");
function criaRepositoryFactory() {
    const repo = new cds_repository_1.CdsRepository();
    return repo;
}
exports.criaRepositoryFactory = criaRepositoryFactory;
function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new cds_useCase_1.CdsUseCase(repo);
    return useCase;
}
exports.criaUseCaseFactory = criaUseCaseFactory;
function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new cds_Controller_1.Cds_Controller(usecase);
    return controller;
}
exports.criaControllerFactory = criaControllerFactory;
