const { vendorSignup, vendorLogin } = require('../Controllers/VendorController');
const { vendorSignupValidation, vendorLoginValidation } = require('../Middlewares/VendorAuthvalidation');

const router = require('express').Router();

router.post('/signup', vendorSignupValidation, vendorSignup);
router.post('/login', vendorLoginValidation, vendorLogin);

module.exports = router;
