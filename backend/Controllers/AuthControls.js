const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res) => {
	const { username, email, password, createdAt } = req.body;
	const existingUser = await User.findOne({ email });
	if (existingUser) return res.json({ message: "User already exists!" });

	const user = await User.create({
		email,
		password,
		username,
		createdAt,
	});

	const token = createSecretToken(user._id);

	res.cookie("token", token, {
		withCredentials: true,
		httpOnly: true,
	});

	return res
		.status(201)
		.json({ message: "User signed in Successfully", status: true, user });
};

module.exports.Login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.json({ message: "All fields are required!" });
	}

	const user = await User.findOne({ email });
	if (!user) {
		return res.json({ message: "Incorrect password or email" });
	}

	const auth = await bcrypt.compare(password, user.password);
	if (!auth) {
		return res.json({ message: "Incorrect password or email" });
	}

	const token = createSecretToken(user._id);

	res.cookie("token", token, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
	});

	return res.status(201).json({
		message: "User logged in successfully!",
		success: true,
	});
};

module.exports.Logout = async (req, res) => {
	res.clearCookie("token", {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
	});
	return res
		.status(200)
		.json({ message: "Logged out successfully", status: true });
};
