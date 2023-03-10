const data = {};
data.employees = require("../Model/employees.json");

const getAllEmployees = (req,res)=>{
    res.json(data.employees);
}

const createNewEmployee = (req,res)=>{
    res.json({
         "first":req.body.firstname,
         "lastname":req.body.lastname
    }) ;
 }

 const updateEmployee = (req,res)=>{
    res.json({
        "first":req.body.firstname,
        "lastname":req.body.lastname
   }) ;
}

const deleteEmployee = (req,res)=>{
    res.json({"id":req.body.id});
}

const getEmployee =(req,res)=>{
    res.json({"id":req.params.id});
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
};