import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized, Please Login Again' });
        }

        // Decode the user token using your environment's secret key
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach the decoded userId to the request body so your controllers can use it
        req.body.userId = token_decode.id;
        
        next(); // Proceed to the order controller logic smoothly
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;