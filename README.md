# paysoncheckout2
A minimal repo which talks to the payson checkout 2.0 api (node)

This is a really quick and dirty module just to implement the very fundamentals for interacting with the payson api.

Someday I might try to wright a proper readme file but please, don't hold your breath while you wait ;). Instead, have a look in the examples folder to see some quick examples of how to use the module.

## Install

### NPM  
```
npm install paysoncheckout2
```

### In your app

```
var PaysonPayment = require('paysoncheckout2');

// create instance (third param sets module to production mode and all the requests will go the production api)
var inProduction = false;
var payson = PaysonPayment.Payson(<vendorId>, <apiKey>, inProduction);

// create item
var item = new PaysonPayment.OrderItem('Test item', 'someIdentifier', 49);

// make it two
item.setQuantity(2);

// create a checkout (you make one per purchase)
var checkout = new PaysonPayment.Checkout('someId', 'https://www.example.com');

// add item to checkout
checkout.addItem(item);

// register the payment
payson.create(checkout)
	.then(function(body) {
		// write body.id to your database
	});
```

### notificationUri

Remeber that you must provide a notificationUri to your app where payson can inform you about updates of the order. I suggest you study their documentation.

## Documentation  

Before diving into this module please read the [Payson documentation](https://api.payson.se/wp/new-api/).
