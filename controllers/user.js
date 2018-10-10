const user = require("./userController.js");
const _ = require('lodash');

let addUser = (req,res)=>{
    let user =  user.addUser(req);
    res.json(user);
};

let getUser = (req,res)=>{
    let user  = user.getUser(req);
    res.json(user);
}

module.exports = {
    addUser,
    getUser
} 

