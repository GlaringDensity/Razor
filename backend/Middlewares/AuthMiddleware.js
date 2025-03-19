const { User } = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
    console.log("Cookies received:", req.cookies);
    const token = req.cookies ? req.cookies.token : undefined;
    if (!token) {
        return res.status(401).json({ status: false, message: "No token provided" });
    }
    jwt.verify(token, process.env.JWT_TOKEN_KEY, async (err, data) => {
        if (err) {
            console.error("JWT verification error:", err);
            return res.status(401).json({ status: false, message: "Invalid token" });
        } else {
            try {
                const user = await User.findById(data.id);
                if (user) return res.json({ status: true, user: user.username });
                else return res.status(404).json({ status: false, message: "User not found" });
            } catch (error) {
                console.error("Error in userVerification:", error);
                return res.status(500).json({ status: false, message: "Internal server error" });
            }
        }
    });
};
