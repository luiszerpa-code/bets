import BetType from "../type/betType.js"

const BetsController = {
    //se vuelve asincrona con el async y se maneja con promesas. try/catch.
    createBet: async (request, answer) => {
        
        try {
            //Se hacen las validaciones de error antes de crear el usuario
            if (request.body.sport === "") throw new Error("You need to add a Sport");
            if (request.body.tournament === "") throw new Error("The Tournament is missing");
            if (request.body.game === "") throw new Error("Add the Game you want to bet");
            if (request.body.selection === "") throw new Error("Please Select your bet");
            if (request.body.totalBet === "") throw new Error("Add the amount you want to bet");
            if (request.body.winner === "") throw new Error("As we have no result we don't now the winner yet");
            if (request.body.result === "") throw new Error("There is no Match Result yet");
            if (request.body.wontheBet === "") throw new Error("Pending (Bet under review)");
            if (request.body.earnings === "") throw new Error("Pending (Waiting for the bet result)");

            //console.log("Solicitud: ", solicitud.body);

            const newBet = new BetType(request.body);
            const betCreated = await newBet.save();

            //console.log(betCreated);

            if (betCreated. _id) {
                answer.json({
                    result: "Great",
                    message: "The Bet have being created",
                    datas: betCreated. _id
                });
            }

            //respuesta.json({mensaje: "POST crear usuario... Works!!"})
            
        } catch (error) {
            //console.log("error: ", error);
            answer.json({
                result: "Something is wrong",
                message: "Error when creating the Bet",
                datas: error,
            });
        }
    },


    checkBet: async (request, answer) => {
        try {
            const betFound = await BetType.findById(request.params.id)

            if (betFound. _id) {
                answer.json({
                    result: "Great",
                    message: "Bet found and checked",
                    datas: betFound
                });
            }
            //console.log(solicitud.params.id);
            //respuesta.json({mensaje: "GET leer 1 usuario... Works!!"})
            
        } catch (error) {
            //console.log("error: ", error);
            answer.json({
                result: "Something is wrong",
                message: "Bet found and checked",
                datas: error
            });
        }
    },

    
    checkAllBets: async (request, answer) => {
        try {
            const checkAllTheBets = await BetType.find();
                answer.json({
                    result: "Great",
                    message: "All bets found and checked",
                    datas: checkAllTheBets
                });
            
        } catch (error) {
            answer.json({
                result: "Something is Wrong!",
                message: "Bet not found",
                datas: error
            });
        }
    },


    updateBet: async (request, answer) => {
        try {
            const betUpdated = await BetType.findByIdAndUpdate(
                request.params.id,
                request.body
            );
            if (betUpdated. _id) {

            answer.json({
                result: "Great",
                message: "Bet have being updated correctly",
                datas: null,
            });
            }
        } catch (error) {
            answer.json({
                result: "Something is wrong",
                message: "There was an error updating the bet",
                datas: error,
            });
        }
    },


    eliminateBet: async(request, answer) => {
        try {
        const betEliminated = await BetType.findByIdAndDelete(request.params.id)

        if (betEliminated. _id) {
            answer.json({
                result: "Great",
                message: "The bet have being eliminated",
                datas: betEliminated
            });
        }
        
    } catch (error) {
        answer.json({
            result: "Something is wrong",
            message: "The bet have being correctly eliminated",
            datas: error
        });
        }
    }
}

export default BetsController;

