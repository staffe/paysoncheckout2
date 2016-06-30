'use strict';

function Checkout(reference, checkoutUri) {
	this.merchant = {
		checkoutUri: checkoutUri,
		confirmationUri: checkoutUri,
		notificationUri: checkoutUri,
		termsUri: checkoutUri,
		reference: reference,
		integrationInfo: 'Custom integration from the lovely open source community'
	};
	this.order = {
		currency: 'sek',
		items: []
	};
	this.gui = {
		locale: 'sv'
	};

	this.addItem = function(item) {
		this.order.items.push(item);
	};
}

module.exports = Checkout;
