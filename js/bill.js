/* bill.js */

export default class Bill {
    constructor() {
        this.amounts = [];
    }
  
    /** @param {string} amountStr */
    addAmount(amountStr) {
        let sum = Number(amountStr);
        this.amounts.push(sum);
        return this.amounts;
    }
    
    getCount() {
        return this.amounts.length;
    }
    
    getTotal() {
        let result = 0;
        this.amounts.forEach(function(amount){
            result +=amount;
        })
        return result;
    }

    getAverage() {
        let result = 0;
        this.amounts.forEach(function(amount){
            result +=amount;
        })
        return result/this.amounts.length;
    }
}