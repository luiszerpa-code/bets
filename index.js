import "dotenv/config";
import serverBets from "./server.js"
import "./conexionBetsDB.js";

serverBets.listen(3000, ()=>{
    console.log("Server working with 3000");
});
