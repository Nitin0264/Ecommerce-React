import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        // Read the token sent from the Admin Panel headers
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: "Not Authorized. Login Again." });
        }

        // Decode and verify the token using your JWT secret
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Ensure the decoded token payload matches your admin identity combination
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized. Login Again." });
        }

        next();
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export default adminAuth;