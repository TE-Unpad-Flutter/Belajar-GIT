const route = require('express').Router();
const userRoute = require('./userRoute')

route.use('/user',userRoute)



module.exports = route;