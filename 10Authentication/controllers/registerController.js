const usersDB = {
    users:require("../model/users.json"),
    setUsers:function(data){
        this.users = data;
    }
}
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req,res)=>{
    const {user,pwd} = req.body;
    if(!user || !pwd) return res.status(404).json({'message':"username and password are required"});
    // check for duplicate username in the db
    const duplicate = usersDB.users.find(person=>person.userName === user);
    if(duplicate) return res.sendStatus(409);  // conflict 
    try{
        // encrypt the password
        const hashedPwd = await bcrypt.hash(pwd,10); // pwd and salt
        // store the new user
        const newUser = {"userName":user,"password":hashedPwd};
        usersDB.setUsers([...usersDB.users,newUser]);
        await fsPromises.writeFile(path.join(__dirname,"..","model","users.json"),JSON.stringify(usersDB.users));
        console.log(usersDB.users);
        res.status(201).json({"suceess":`new user ${user} created`});
    }
    catch(err){
        res.status(500).json({"message":err.message});
    }
}

module.exports = {handleNewUser};