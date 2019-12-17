'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas

// Usaremos los esquemas
// Creamos el objeto del esquema y sus atributos
var UsersSchema = mongoose.Schema({
  //  users_id: mongoose.Schema.Types.ObjectId,
    NameUser: {
        type: String,
        required: true
    },
    LastNameUser: {
        type: String,
        required: true
    },
    EmailUser: {
        type: String,
        required: true
    },
    PasswordUser: {
        type: String,
        required: true
    },
    StatusUser: {
        type: Boolean,
        required: true
    },
    DateBeginUser: {
        type: Date,
        default: Date.now
    } ,
    TypeUser: {
        IdType: {
            type: String,
            required: true
        },
        Role: {
            type: String,
            required: true
        },
        DescripTypeUser: {
            type: String,
            required: true
        }
    },


});
// Export Users model
var Users = module.exports = mongoose.model('Users', UsersSchema);
module.exports.get = function (callback, limit) {
    Users.find(callback).limit(limit);
}


