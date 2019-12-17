'use strict'
// Cargamos los modelos para usarlos posteriormente
var Users = require('../models/user');


// Handle index actions
exports.index = function (req, res) {
    Users.get(function (err, users) {
        if (err) {
            return res.status(404).send({
                status: "error",
                message: err,
            });
        }
        return res.status(200).send({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};






// Handle view users info
exports.view= (req, res) => {
    console.log("view"); 
  // Validate request
  if(!req.params.users_id) {
    return res.status(400).send({
        message: "User NameUser can not be empty"
    });
}

    Users.findById(req.params.users_id)
    .then(users => {
        if(!users) {
            return res.status(404).send({
                message: "User not found with id " + req.params.users_id,
                status:'400',
                data: err
            });            
        }
        return res.status(200).send({
            status: "success",
            message: "Users found",
            data: users
        });
   
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.users_id,
                status:'404',
                data: err
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.params.users_id,
            status:'500',
            data: err
        });
    });
};









// Create and Save a new Note
exports.new= (req, res) => {
    console.log("new  " ); 
  // Validate request
  if(!req.body) {
    return res.status(400).send({
        message: "User body can not be empty"
    });
}

  //Validate request
 /* if(!req.body.NameUser) {
    return res.status(400).send({
        message: "User NameUser can not be empty"
    });
    }*/


    var users = new Users();
    users.NameUser = req.body.NameUser ? req.body.NameUser : users.NameUser;
    users.LastNameUser = req.body.LastNameUser;
    users.EmailUser = req.body.EmailUser;
    users.PasswordUser = req.body.PasswordUser;
    users.StatusUser = req.body.StatusUser;
    users.DateBeginUser = req.body.DateBeginUser;
    users.TypeUser = req.body.TypeUser;



    // Save User in the database
    users.save()
    .then(users => {
        return res.status(200).send({
            message: 'New user created!',
            status:"success",
            data: users
        });
    }).catch(err => {

       
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User.",
            status:'500',
            data: err
           
        });
    });
};







// Update a note identified by the UserId in the request
exports.update = (req, res) => {

    console.log("update  " +   req.params.users_id); 
    // Validate Request
    if(!req.params.users_id) {
        return res.status(400).send({
            message: "User id can not be empty"
        });
    }


      // Validate Request
      if(!req.body) {
        console.log("update  " +  req.body); 
        return res.status(400).send({
            message: "User body can not be empty"
        });
    }

    // Find note and update it with the request body
    Users.findByIdAndUpdate(req.params.users_id, {
        NameUser : req.body.NameUser ? req.body.NameUser : users.NameUser,
        LastNameUser : req.body.LastNameUser,
        EmailUser :req.body.EmailUser,
        PasswordUser : req.body.PasswordUser,
        StatusUser : req.body.StatusUser,
        DateBeginUser : req.body.DateBeginUser, 
        TypeUser : req.body.TypeUser,  
    }, {new: true})
    .then(users => {
        if(!users) {
            return res.status(404).send({
                message: "User not found with id " + req.params.users_id,
                    status:'404',
                    data: err
            });
        }
        return res.status(200).send({
            message: 'user Info updated',
            status:"success",
            data: users
        });
      
           
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.users_id,
                status:'404',
                data: err
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.users_id,
            status:'500',
            data: err
        });
    });
};




// Delete a Users with the specified UsersId in the request
exports.delete = (req, res) => {
    console.log("delete  " +   req.params.users_id); 
    if(!req.params.users_id) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    Users.findByIdAndRemove(req.params.users_id)
    .then(users => {
        if(!users) {
            return res.status(404).send({
                message: "User not found with id " + req.params.users_id,
                status:'404',
                data: err
            });
        }
        res.send({  
            message: "User deleted successfully!",
            status:"success",
            data: users
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.users_id,
                status:'404',
                data: err
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.users_id,
            status:'500',
            data: err
        });
    });
};


