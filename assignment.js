var text = 
"2 book at 12.49 1 music CD at 14.99 1 chocolate bar at 0.85";

let regex = /\d+ [\w\s]* at \d+.\d{2}/g;
let match;
let matches = [];

while (match = regex.exec(text)) {
    matches.push(match)
}

const productnames = [];
const qtys = [];
const prices = [];

// parse to get the name, price and quantity of each line item in the string  

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

// store name, price, and quantity into array of objects

const items = productnames.map( (s, i) => ({item_name : s, item_price : prices[i], item_qty : qtys[i]}) );

// function to check what taxes apply for the product 

var isImported, exemptBasicTax;

function checkTaxes(item){
    exemptBasicTaxList = ["chocolate", "chocolates","book", "books", "pill", "pills"];
    if (exemptBasicTaxList.some(v => item.includes(v))){
            exemptBasicTax = true;
    } else {
            exemptBasicTax = false;
    }
    if (item.includes("imported")){
            isImported = true;
    }
    else {
            isImported = false;
    }
    return{
        isImported, 
        exemptBasicTax
    };
}


// Calculate the total price after tax

function calTotalPrice(exemptBasicTax, isImported, price, qty){
    if (exemptBasicTax && !isImported){
		totalprice = parseFloat(price * qty);
    }
    else if (!exemptBasicTax && isImported){
            totalprice = parseFloat(price * qty * 1.15);
    }
    else if (!exemptBasicTax && !isImported){
            totalprice = parseFloat(price * qty * 1.1);
    }
    else if (exemptBasicTax && isImported){
            totalprice = parseFloat(price * qty * 1.05);
    }
    return (totalprice.toFixed(2));
}

var totalcartprice, totaloriginalprice;
totalcartprice = totaloriginalprice = 0;
totalnewitemprice = [];
allitems = [];
exempted = [];
imported = [];

for (var i=0; i< items.length; i++){
    checkTaxes(items[i].item_name);
    totaloriginalprice += parseFloat(items[i].item_price * items[i].item_qty);
    totalnewitemprice.push(calTotalPrice(exemptBasicTax, isImported, items[i].item_price, items[i].item_qty))
    totalcartprice += parseFloat(calTotalPrice(exemptBasicTax, isImported, items[i].item_price, items[i].item_qty));
    salestax = (totalcartprice - totaloriginalprice).toFixed(2);
    lineitem1 = items[i].item_qty + " "+ items[i].item_name + ": " +  totalnewitemprice[i];
    allitems.push(lineitem1);
}


function receipt(){
    return `${allitems.join("\n")}\nSales Tax: ${salestax}\nTotal: ${totalcartprice.toFixed(2)}`;
}

console.log(receipt());

