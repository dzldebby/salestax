const {returnReceipt} = require('./modules/returnReceipt');
const {getinput} = require('./modules/getInput')
const {parseText} = require('./modules/parseText')
const {PriceCalculator} = require('./modules/PriceCalculator')
const {ReceiptGenerator} = require('./modules/ReceiptGenerator')

const {StoreItem} = require('./modules/StoreItem')


itemArray = [];


itemArray.push(new StoreItem('book', 12.49, 2));
// itemArray.push(new StoreItem('music CD', 14.99, 1));
// itemArray.push(new StoreItem('chocolate bar', 0.85, 1));


var priceCalculator = new PriceCalculator();

var receiptGenerator = new ReceiptGenerator(priceCalculator);

describe('main', () => {
    it('should return first output answer', ()=> {
        const result = receiptGenerator.receipt(itemArray);
        expect(result).toBe('2 book: 24.98\nSales Tax: 0.00\nTotal: 24.98');
    })
})




