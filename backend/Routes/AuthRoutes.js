const { Signup, Login, Logout } = require("../Controllers/AuthControls");
const wrapAsync = require("../util/wrapAsync");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

router.post("/signup", wrapAsync(Signup));
router.post("/login", wrapAsync(Login));
router.post("/logout", wrapAsync(Logout));

module.exports = router;
