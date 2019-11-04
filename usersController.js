// usersController.js
// Import user model
var Users = require('./model/usersModel');



// Handle index actions
exports.index = function (req, res) {
    Users.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};





// Handle view users info
exports.view = function (req, res) {
    Users.findById(req.params.users_id, function (err, users) {
        console.log("req.params.users_id, IS: " + req.params.users_id);
        if (err)
            res.send(err);
           
            res.json({
            message: 'users details loading..',
           
            data: users
        });
    });
};


// Handle create user actions
exports.new = function (req, res) {
    var users = new Users();
    users.NameUser = req.body.NameUser ? req.body.NameUser : users.NameUser;
    users.LastNameUser = req.body.LastNameUser;
    users.EmailUser = req.body.EmailUser;
    users.PasswordUser = req.body.PasswordUser;
    users.StatusUser = req.body.StatusUser;
    users.DateBeginUser = req.body.DateBeginUser;
    users.TypeUser = req.body.TypeUser;

    console.log("REQ.BODY.lastname IS: " + req.body.LastNameUser);
    console.log("REQ.BODY.lastname IS: " + req.body.TypeUser);
  
// save the user and check for errors
users.save(function (err) {
         if (err)
             res.json(err);
res.json({
            message: 'New user created!',
            data: users
        });
    });
};




// Handle update user info
exports.update = function (req, res) {
    Users.findById(req.params.users_id, function (err, users) {
        console.log("req.params.users_id IS: " +   req.params.users_id); 

        if (err)
            res.send(err);
            users.NameUser = req.body.NameUser ? req.body.NameUser : users.NameUser;
            users.LastNameUser = req.body.LastNameUser;
            users.EmailUser = req.body.EmailUser;
            users.PasswordUser = req.body.PasswordUser;
            users.StatusUser = req.body.StatusUser;
            users.DateBeginUser = req.body.DateBeginUser;   
            users.TypeUser = req.body.TypeUser;   
         
           
// save the user and check for errors
            users.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'user Info updated',
                data: users
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    Users.remove({
   
    }, 
    

    function (err, user) {
        console.log("req.params.users_id IS: " + req.params.users_id); 
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'user deleted'
        });
    });
};


