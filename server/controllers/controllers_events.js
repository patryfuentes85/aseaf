const mongoose = require('mongoose');

const itemSchema = {
    titulo: String,
    fecha: String,
    descripcion: String,
    direccion: String,
    ciudad: String,
    precio: String,
    img: String
}

const usersSchema = mongoose.Schema(itemSchema);
const Users = mongoose.model('users', asocSchema);
module.exports = Users;