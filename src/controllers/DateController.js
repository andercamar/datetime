const moment = require('moment');

class DateController{
    async index(req,res){
        try {
            let now = moment().format("DD/MM/YYYY HH:mm:ss");
            res.status(200).json({datetime:now})
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Erro ao encontrar registros"})
        }
    }
}

module.exports = new DateController();