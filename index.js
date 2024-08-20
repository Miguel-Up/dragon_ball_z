
const express = require("express");
const { connectDB } = require("./src/utils/db")
const env = require("dotenv");
env.config()
const router = require('./src/api/routes/characters.routes')
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET


})
console.log(process.env)


connectDB();
const server = express(); // creamos el servidor, mas facil
const PORT = process.env.PORT;


server.use(express.json())
server.use("/", router)





server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT}`)
})

// modelos vista controlador=> modelos, vistas, controlador
//modelos => estructuras de BD (colecciones),
//controladores => funcionalidad para acceder a la BD
//vistas => representar las routes
//utils => funciones de validacion, conexion con la BD, middleware (funciones intermediarias) 