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

payson.validate()
	.then(function(body) {
		console.log('BODY');
		console.log('=================');
		console.log(body);
	})
	.catch(function(err) {
		console.log('StatusCode: ' + err.statusCode);
	});
