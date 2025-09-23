const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
	email: {
		type: String,
		required: [true, "Your email address is required"],
		unique: true,
	},
	username: {
		type: String,
		required: [true, "Your username is required"],
	},
	password: {
		type: String,
		required: [true, "Your password is required"],
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

UserSchema.pre("save", async function () {
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

module.exports = { UserSchema };
