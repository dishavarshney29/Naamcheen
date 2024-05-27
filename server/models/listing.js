const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
	{
		// name of crop
		name: String,

		// price of crop per kg
		// price: Number,

		// quality of produce predicted by the ML model
		qualityScore: Number,

		//quality grade of produce predicted by the ML model
		quality: String,

		// quantity of produce
		quantity: Number,

		// url of uploaded image - relative URL of Flask server
		image: String,

		// listing added by farmer
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Farmer"
		}
	},
	{
		versionKey: false
	}
);

module.exports = mongoose.model("Listing", listingSchema);
