'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Llamamos al router
var api = express.Router();
// Cargamos el controlador
var usersController = require('../controllers/user');






api.get('/',function(req,res){
    res.json({
        status:'API USERS WORKING',
        message:'Bienvenido a la raiz del servicio'
    });
});


    // Contact routes
    api.route('/users')
    .get(usersController.index)
    .post(usersController.new);
    
    
    api.route('/users/:users_id')
    .get(usersController.view)
    .patch(usersController.update)
    .put(usersController.update)
    .delete(usersController.delete);
    
    



    







// Exportamos la configuración
module.exports = api;