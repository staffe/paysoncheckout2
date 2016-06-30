var util = require('util');

/**
 * require the conctructor
 * @type {Constructor}
 */
var PaysonPayment = require('../index');

/**
 * Get required environment variables
 * @type {string}
 */
var vendorId = process.env.vendorId;
var apiKey = process.env.apiKey;

/**
 * Create instance
 * @type {object}
 */
var payson = new PaysonPayment.Payson(vendorId, apiKey);

/**
 * Create item
 * @type {PaysonPayment}
 */
var item = new PaysonPayment.OrderItem('Test', 'abc123', 49);

// create a checkout
var checkout = new PaysonPayment.Checkout('someId', 'https://www.example.com');

// add item
checkout.addItem(item);

payson.create(checkout)
	.then(function(body) {
		console.log('Checkout created');
		console.log('================');
		console.log(body);
		console.log('================');
		console.log('id: ' + body.id);
	})
	.catch(function(err) {
		console.log('Problems... statuscode: ', err);
	});
