var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new mongoose.Schema({
	address: {type: String, required: [true, "We need an address, Tony..."]},
	image: {type: Array}
}, {timestamps: true})

mongoose.model('Listing', ListingSchema)
