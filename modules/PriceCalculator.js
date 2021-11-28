const { parseText } = require("./parseText");
const { getinput } = require("./getInput");
const { checkTaxes } = require("./checkTaxes");



class PriceCalculator{

    constructor(){
        this.exemptBasicTaxList = ["chocolate", "chocolates","book", "books", "pill", "pills"];
    }

    // split into checkTaxExempt, checkIsImported
    checkTaxes(item){
        if (this.exemptBasicTaxList.some(v => item.name.includes(v))){
            item.setExemptBasicTax(true);
        } else {
            item.setExemptBasicTax(false);
        }
        if (item.name.includes("imported")){
            item.setIsImported(true);
        }
        else {
            item.setIsImported(false);
        }
        return item
    }

    
    calTotalPrice(item){
        // must always call checkTaxes because calTotalPrice, so checkTaxes can be private functin 
        var totalprice = 0;
        if (item.exemptBasicTax && !item.isImported){
            totalprice = parseFloat(item.price * item.qty);
        }
        else if (!item.exemptBasicTax && item.isImported){
                totalprice = parseFloat(item.price * item.qty * 1.15);
        }
        else if (!item.exemptBasicTax && !item.isImported){
                totalprice = parseFloat(item.price * item.qty * 1.1);
        }
        else if (item.exemptBasicTax && item.isImported){
                totalprice = parseFloat(item.price * item.qty * 1.05);
        }
        return (totalprice.toFixed(2));
    }

}


exports.PriceCalculator = PriceCalculator;



// separate class with constant 
// var salestax = 0.05 
// salestax + importTax


// chocolate: true 
// music: false 