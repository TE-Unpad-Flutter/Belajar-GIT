const userRoute = require('express').Router()
const {UserController} = require('../Controllers')


userRoute.get('/',UserController.getAllUsers)
userRoute.post('/create',UserController.createUser)
userRoute.put('/update/:id',UserController.updateUser)
userRoute.delete('/delete/:id',UserController.deleteUser)


module.exports = userRoute