const express = require("express"); //template
const router = express.Router()     //template
const { getcharacter, getCharacterById, updateCharacter } = require('../controllers/characters.controllers')

router.get("/getcharacters", getcharacter)
router.get("/getcharacters/:id", getCharacterById)
router.put("/getcharacters/:id", updateCharacter)



module.exports = router