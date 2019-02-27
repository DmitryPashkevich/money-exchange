// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var objectMoney = {
'H': 0,
'Q': 0,
'D': 0,
'W': 0,
'P':0
    };

    var noll = {

    }
    
    var counter = 0;
    
    if (currency <= 0) {
       return noll;
    }

    if (currency > 10000) {
     noll.error ="You are rich, my friend! We don't have so much coins for exchange";
     return noll;
    }
 
    while (currency >= counter + 50) {
        counter += 50;
        objectMoney['H']++;
    }

    while (currency >= conter + 25) {
        counter += 25;
        objectMoney['Q']++;
    }

    while (currency >=counter + 10) {
        counter += 10;
        objectMoney['D']++;
    }

    while (currency >= counter + 5) {
        counter += 5;
        objectMoney['W']++;
    }

    while ( currency != counter ) {
        counter ++;
        objectMoney['P']++;
    }

return objectMoney;
}
