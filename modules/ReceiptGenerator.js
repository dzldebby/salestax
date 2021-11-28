
const { parseText } = require("./parseText");
const { getinput } = require("./getInput");

const { priceCalculator } = require("./PriceCalculator");


class ReceiptGenerator{


    constructor(priceCalculator){
        this.priceCalculator = priceCalculator;
    }


    receipt(items){
        var salestax = 0;
        var allitems = [];
        var totalcartprice = 0;
    
        for (var i=0; i< items.length; i++){
            this.priceCalculator.checkTaxes(items[i]);
            var totaloriginalprice = 0;
            var totalnewitemprice = [];
            totaloriginalprice += parseFloat(items[i].price * items[i].qty);
            totalnewitemprice.push(this.priceCalculator.calTotalPrice(items[i]))
            totalcartprice += parseFloat(this.priceCalculator.calTotalPrice(items[i]));
            salestax = (totalcartprice - totaloriginalprice).toFixed(2);
            var lineitem1 = items[i].qty + " "+ items[i].name + ": " +  totalnewitemprice[i];
            allitems.push(lineitem1);
        }
    
        return `${allitems.join("\n")}\nSales Tax: ${salestax}\nTotal: ${totalcartprice.toFixed(2)}`;
    
    }

}


exports.ReceiptGenerator = ReceiptGenerator;


// calTotalPrice to be assigned to a new variable 


//1. Even before coding, think about what are the objects you need in your application 
//2. Think about what objects you need
//3. What outputs you want at the end 
//4. What's the interaction 