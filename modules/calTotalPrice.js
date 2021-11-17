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

exports.calTotalPrice = calTotalPrice;
