const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const VendorModel = require("../Models/vendorregistration"); // Ensure the correct path to your Vendor model


  const vendorSignup = async (req, res) => {
    try {
        const { businessName, businessType, address, contactNumber, email, password, profilePhoto } = req.body;
        
        // Check if vendor already exists
        const existingVendor = await VendorModel.findOne({ email });
        if (existingVendor) {
            return res.status(409).json({ message: 'Vendor already exists, please login', success: false });
        }

        // Create and save new vendor
        const vendor = new VendorModel({ businessName, businessType, address, contactNumber, email, profilePhoto });
        vendor.password = await bcrypt.hash(password, 10); // Hash the password
        await vendor.save();

        res.status(201).json({ message: 'Vendor registered successfully', success: true });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};


// Vendor login
const vendorLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const vendor = await VendorModel.findOne({ email });
        const errorMsg = 'Authentication failed, email or password is incorrect';
        if (!vendor) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, vendor.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: vendor.email, _id: vendor._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Successful",
            success: true,
            jwtToken,
            email,
            businessName: vendor.businessName,
        });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = {
    vendorSignup,
    vendorLogin
};
