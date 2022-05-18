const mongoose = require('mongoose');

const itemSchema = {
    nombre: String,
    apellidos: String,
    fnac: String,
    email: String,
    cp: Number
}

const usersSchema = mongoose.Schema(itemSchema);
const Users = mongoose.model('users', asocSchema);
module.exports = Users;