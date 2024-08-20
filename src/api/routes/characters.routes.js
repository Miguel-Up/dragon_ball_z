const express = require("express"); //template
const router = express.Router()     //template
const { getcharacter } = require('../controllers/characters.controllers')

router.get("/getcharacters", getcharacter)



module.exports = router