var user = require("./userController.js");
var _ = require('lodash');

// let getUserList =  async (req,res)=>{
//     let userlist = await user.list();
//     const value = _.find(userlist, prop => prop.id === 'peter');
//     res.json(userlist);   
// }

let addUser = (req,res)=>{
    let user =  user.addUser(req);
    res.json(user);
};

//let getUser = (req,res);



module.exports = {
    addUser: addUser
} 

