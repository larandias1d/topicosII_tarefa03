import express from 'express'

import { Router, Request, Response } from 'express';
import { criaControllerFactory } from './infra/factory';

const app = express();

const route = Router()

app.use(express.json())

const cdController = criaControllerFactory();

route.get("/cd", (req: Request, res: Response) => { cdController.listar_cds(req, res) });

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Servidor rodando...' })
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')