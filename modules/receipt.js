
const {checkTaxes} = require('./checkTaxes');
const {calTotalPrice} = require('./calTotalPrice');

function receipt(items){
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

    return `${allitems.join("\n")}\nSales Tax: ${salestax}\nTotal: ${totalcartprice.toFixed(2)}`;

}
exports.receipt = receipt;
