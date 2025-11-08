const express = require('express');
const router = express.Router();
const {
  getDashboard,
  getAllUsers,
  deleteUser
} = require('../controllers/adminController');
const protect = require('../middleware/auth');
const authorize = require('../middleware/authorize');

// All admin routes are protected and require admin role
router.use(protect);
router.use(authorize('admin'));

router.get('/dashboard', getDashboard);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);

module.exports = router;
