import { Schema, model } from "mongoose";

// El Schema hace que el squemaUsuario tenga esa estructura. La cual se crea por completo.
const betSchema = new Schema(
    {
        sport: {type: String, required: true},
        tournament: {type: String, required: true},
        game: {type: String, required: true},
        selection: {type: String, required: true},
        totalBet: {type: Number, required: true},
        winner: {type: String, required: true},
        result: {type: String, required: true},
        wontheBet: {type: Boolean, required: true},
        earnings: {type: Number, required: true},
    });

    export default model ("Bet", betSchema);
