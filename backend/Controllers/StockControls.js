const { HoldingsModel } = require("../models/HoldingsModel");
const { PositionsModel } = require("../models/PositionsModel");
const { OrdersModel } = require("../models/OrdersModel");

module.exports.getHoldings = async (req, res) => {
	let allHoldings = await HoldingsModel.find({});
	res.json(allHoldings);
};

module.exports.getPositions = async (req, res) => {
	let allPositions = await PositionsModel.find({});
	res.json(allPositions);
};

module.exports.createOrders = async (req, res) => {
	let newOrder = new OrdersModel({
		name: req.body.name,
		qty: req.body.qty,
		price: req.body.price,
		mode: req.body.mode,
	});

	newOrder.save();
	res.send("Order Saved!");
};
