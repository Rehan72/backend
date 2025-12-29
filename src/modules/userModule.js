// User module - encapsulates user-related functionality
const userService = require('../services/userService');
const userController = require('../controllers/userController');
const userRoutes = require('../routes/userRoutes');

module.exports = {
  service: userService,
  controller: userController,
  routes: userRoutes,
};