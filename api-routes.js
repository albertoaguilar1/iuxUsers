//inicializa express router
let router = require('express').Router();

//set deafuilt API RESPONSE 

//Import UsersController
var usersController = require('./usersController');
  

    // Contact routes
router.route('/users')
.get(usersController.index)
.post(usersController.new);

router.route('/users/:users_id')
.get(usersController.view)
.patch(usersController.update)
.put(usersController.update)
.delete(usersController.delete);



router.get('/',function(req,res){
    res.json({
        status:'API ITS working',
        message:'Welcome to restHub crafted with lovesssss!'
    });
});

    router.get('/login',function(req,res){
        res.json({

            status:'API ITS working',
            message:'Welcome to restHub crafted with lovex!'
        });

});



//export api routers
module.exports=router ;