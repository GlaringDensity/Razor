const { Signup, Login } = require('../Controllers/AuthController')
const { userVerification } = require('../Middlewares/AuthMiddleware');
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/logout', (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "None"
    });
    return res.status(200).json({ message: "Logged out successfully" });
});


router.post('/', userVerification);

module.exports = router;