
const {getinput} = require('./getInput');
const { StoreItem } = require('./StoreItem');



function parseText(text){
    let regex = /\d+ [\w\s]* at \d+.\d{2}/g;
    let match;
    let matches = [];


    while (match = regex.exec(text)) {
        matches.push(match)
    }

    const storeItems = [];


    for (var i=0; i< matches.length; i++){
        item = matches[i][0];
        text_split = item.split(/\s+/);
        at_pos = (text_split.indexOf("at"));
        price = parseFloat(text_split[text_split.length-1]);
        qty = parseFloat(text_split[0]);
        product_name = text_split.slice(1,at_pos).join(" ");        
        storeItems.push(new StoreItem(product_name, price, qty));
    }
    
    return storeItems;
}




exports.parseText = parseText;

