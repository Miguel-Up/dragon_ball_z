const Characters = require('../models/characters.model')

const getcharacter = async (req, res) => {
    try {
        //http://localhost:3030/getcharacters?pag=5&limit=10

        let pag = parseInt(req.query.pag) //convertir el string en number
        let limit = parseInt(req.query.limit) //convertir el string en number
        const numCharacters = await Characters.countDocuments() //cantidad de documentos que hay

        /*  if (limit >= 10) {
             limit = 10
         }
         if (limit <= 0) {
             limit = 5
         } */
        limit = limit >= 10 ? 10 : limit <= 0 ? 5 : limit //ternario anidado de los if de arriba

        pag = !isNaN(pag) ? pag : 1 //validaciones para que me pasen numeros en pag y limit
        limit = !isNaN(limit) ? limit : 5; //validaciones para que me pasen numeros en pag y limit
        console.log(pag, limit)
        let numPage = Math.ceil(numCharacters / limit)


        if (pag > numPage) {
            pag = numPage
        }

        if (pag < 1) {
            pag = 1
        }
        /*
        pag = 3
        limit = 5
         15--> pagina 3
         */
        const allCharacters = await Characters.find().skip((pag - 1) * limit).limit(limit)
        //skip --> descarto los elementos que no estan en la pagina indicada.
        //limit, solo devuelvo la cantidad definida en el limit.
        res.json({
            previewpage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            quantityPage: allCharacters.length,
            data: allCharacters

        })
    } catch (error) {
        res.json(error)
    }

}





module.exports = { getcharacter }