const {
	getHoldings,
	getPositions,
	createOrders,
} = require("../Controllers/StockControls");
const router = require("express").Router();
const wrapAsync = require("../util/wrapAsync");

router.get("/allHoldings", wrapAsync(getHoldings));
router.get("/allPositions", wrapAsync(getPositions));
router.post("/newOrder", wrapAsync(createOrders));

module.exports = router;
