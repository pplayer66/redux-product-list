const mongoose = require('mongoose');

const schema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	amount: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	}
});

const Product = mongoose.model('Product', schema);
module.exports = {Product};
