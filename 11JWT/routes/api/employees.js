const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
const verifyJWT =require("../../middleware/verifyJWT");


router.route('/')
    .get(employeesController.getAllEmployees)   // .get(verifyJWT,employeesController.getAllEmployees) -> good for selected routes
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;