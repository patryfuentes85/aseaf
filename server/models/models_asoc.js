const mongoose = require('mongoose');

const itemSchema = {
    oficina: String,
    email: String,
    telefono: String,
    direccion: String,
    cp: Number
}

const asocSchema = mongoose.Schema(itemSchema);
const Asoc = mongoose.model('asoc', asocSchema);
module.exports = Asoc;