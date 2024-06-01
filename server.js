import express from "express";
import routesBets from "./routes/routesBets.js";
import morgan from "morgan";

const serverBets = express();

//se empieza a usar el morgan
serverBets.use(morgan("dev"));

//decirle al servidor que use json que viene de express
serverBets.use(express.json());


serverBets.use("/bets", routesBets);

serverBets.get('/',(request, answer) =>{
    answer.status(404).send("Not Found");
});

export default serverBets;
