const {returnReceipt} = require('./modules/returnReceipt');
const {getinput} = require('./modules/getInput')
const {parseText} = require('./modules/parseText')
const {PriceCalculator} = require('./modules/PriceCalculator')
const {ReceiptGenerator} = require('./modules/ReceiptGenerator')




var text = getinput();
var items = parseText(text);


var priceCalculator = new PriceCalculator();

var receiptGenerator = new ReceiptGenerator(priceCalculator);


console.log(receiptGenerator.receipt(items));


// parseText as a separate class

// folder called 'parser'
// test is in the same place as the implementation 