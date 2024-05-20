const express = require('express');
const route = express.Router();
const {getstudents , deletestd , getStdById , updatestd , poststd} = require('../controller/student.controller')
route.use(express.json())
route.use(express.urlencoded({extended:true}))
route.get('/' , getstudents)
route.get('/:id' , getStdById)
route.post('/' , poststd)
route.put('/:id' , updatestd)
route.delete('/:id' , deletestd)
module.exports = route;