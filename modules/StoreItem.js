class StoreItem {
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.isImported = false;
        this.exemptBasicTax = false;
    }

    setIsImported(isImported){
        this.isImported = isImported
    }

    setExemptBasicTax(exemptBasicTax){
        this.exemptBasicTax = exemptBasicTax
    }
}


exports.StoreItem = StoreItem;