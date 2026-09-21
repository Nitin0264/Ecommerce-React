import jwt from 'jsonwebtoken';

// Admin Login Handler Function
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check against your .env variables
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Generate a secure session token using the credentials + your JWT secret
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            return res.json({ success: true, token });
        } else {
            return res.json({ success: false, message: "Invalid Admin Credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

// Ensure adminLogin is exported alongside your other user functions
export { adminLogin };