const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = (req, res) => {
	const token = req.cookie.token;

	if (!token) return res.json({ status: false });

	jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
		if (err) return res.json({ status: false });
		else {
			const user = await User.findById(data.id);
			if (user) return res.json({ status: true, user: user.username });
			else return res.json({ status: false });
		}
	});
};
