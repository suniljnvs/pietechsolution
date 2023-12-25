const router = require('express').Router();

const user_controller = require('./usercontroller.js');

//user routes
router.post('/create-user',user_controller.createUser);
router.get('/get-user-by-name',user_controller.getUser);


module.exports = router