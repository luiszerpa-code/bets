import { Router } from "express";
import BetsController from "../controllers/betsController.js";

const routerBets = Router();

//Crear un usuario
routerBets.post('/', BetsController.createBet);    

//Informacion solo 1 usuario
routerBets.get('/:id', BetsController.checkBet);  

//Informacion de todos los usuario
routerBets.get('/', BetsController.checkAllBets);  

//Actualizar usuario
routerBets.put('/:id', BetsController.updateBet);  

//Eliminar usuario
routerBets.delete('/:id', BetsController.eliminateBet);  

export default routerBets;