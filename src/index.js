// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {
        "H":50, 
        "Q":25, 
        "D":10, 
        "N":5, 
        "P":1};


    let twoCoins = {};


    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if(currency<=0){
        return {};
    }

    for (i in coins) {
       if(currency >= coins[i]) {
         twoCoins[i] = Math.floor(currency/coins[i]);
         currency =currency - twoCoins[i] * coins[i];
       }

       return twoCoins;
    }




}
