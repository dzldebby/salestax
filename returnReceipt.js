
const {parseText} = require('./parseText');
const {receipt} = require('./receipt')
const {getinput} = require('./getinput')


function returnReceipt(text){
    parseText(text);
    return receipt(items);
}
  
exports.returnReceipt = returnReceipt;
exports.getinput = getinput;




