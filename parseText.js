function parseText(text){
    let regex = /\d+ [\w\s]* at \d+.\d{2}/g;
    let match;
    let matches = [];


    while (match = regex.exec(text)) {
        matches.push(match)
    }

    const productnames = [];
    const qtys = [];
    const prices = [];


    for (var i=0; i< matches.length; i++){
        item = matches[i][0];
        text_split = item.split(/\s+/);
        at_pos = (text_split.indexOf("at"));
        price = parseFloat(text_split[text_split.length-1]);
        prices.push(price);
        qty = parseFloat(text_split[0]);
        qtys.push(qty);
        product_name = text_split.slice(1,at_pos).join(" ");
        productnames.push(product_name);
    }
    
    items = productnames.map( (s, i) => ({item_name : s, item_price : prices[i], item_qty : qtys[i]}) );
    return items;
}

exports.parseText = parseText;

