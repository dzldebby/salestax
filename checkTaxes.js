

// function to check what taxes apply for the product 

global.isImported= '';
global.exemptBasicTax = '';

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


// module.exports = { exemptBasicTax };

exports.checkTaxes = checkTaxes;


// module.exports = { isImported };
