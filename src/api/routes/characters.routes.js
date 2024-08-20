const express = require("express"); //template
const router = express.Router()     //template
const { getcharacter, getCharacterById } = require('../controllers/characters.controllers')

router.get("/getcharacters", getcharacter)
router.get("/getcharacters/:id", getCharacterById)



module.exports = router