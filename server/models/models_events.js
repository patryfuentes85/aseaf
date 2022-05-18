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

const eventsSchema = mongoose.Schema(itemSchema);
const Events = mongoose.model('events', eventsSchema);
module.exports = Events;