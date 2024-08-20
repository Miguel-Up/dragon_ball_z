const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: { type: String, require: true },
    planet: { type: String, require: true },
    image: { type: String, require: true },
    ki: { type: Number }

},
    {

        collection: 'characters',
        timestamps: true //createAt---.
    })
const Characters = mongoose.model('characters', characterSchema);
module.exports = Characters;