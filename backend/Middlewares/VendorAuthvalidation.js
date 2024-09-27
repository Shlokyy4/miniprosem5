const Joi = require('joi');

// Validation for vendor signup

const vendorSignupValidation = (req, res, next) => {
    // Define the validation schema matching your JSON fields
    const schema = Joi.object({
      businessName: Joi.string().min(3).max(100).required(), // Validate 'businessName'
      businessType: Joi.string().min(3).max(100).required(), // Validate 'businessType'
      address: Joi.string().min(5).max(255).required(), // Validate 'address'
      contactNumber: Joi.string().pattern(/^[\d\+\-\(\) ]+$/).required(), // Validate 'contactNumber'
      email: Joi.string().email().required(), // Validate 'email'
      password: Joi.string().min(4).max(100).required(), // Validate 'password'
      profilePhoto: Joi.string().optional(), // Optional if not handled by multer
    });
      
      
      ;
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "Bad request", error });
    }
    next();
  };

// Validation for vendor login
const vendorLoginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }
    next();
};

module.exports = {
    vendorSignupValidation,
    vendorLoginValidation
};
