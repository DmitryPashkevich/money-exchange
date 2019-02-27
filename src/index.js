// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var objectMoney = {

    };
    
    
    if (currency <= 0) {
       return objectMoney;
    }

    if (currency > 10000) {
     objectMoney.error ="You are rich, my friend! We don't have so much coins for exchange";
     return objectMoney;
    }


}
