const express = require('express');
const router = express.Router();
const {
  getDashboard,
  getProfile,
  updateProfile
} = require('../controllers/userController');
const { updateProfileValidation, validate } = require('../utils/validators');
const protect = require('../middleware/auth');

// All user routes are protected
router.use(protect);

router.get('/dashboard', getDashboard);
router.get('/profile', getProfile);
router.put('/profile', updateProfileValidation, validate, updateProfile);

module.exports = router;
