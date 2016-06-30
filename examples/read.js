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
var id = process.env.id;

if(!id) {
	throw new Error('env variables id not set');
}

/**
 * Create instance
 * @type {object}
 */
var payson = new PaysonPayment.Payson(vendorId, apiKey);


payson.read(id)
	.then(function(body) {
		console.log('GameId: ' + body.merchant.reference);
		console.log('Status: ' + body.status);
	})
	.catch(function(err) {
		console.log('StatusCode: ' + err.statusCode);
	});
