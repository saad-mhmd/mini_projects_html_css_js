fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6dffb7dba6c24250a9f5086feb52d4eb").then(result => {
    // console.log(result);
    let myData = result.json();
    // console.log(myData);
    return myData;
}).then((currency) => {

    let amount = document.querySelector(".amount");
    let lbpPrice = document.querySelector(".lbp span");
    let eurPrice = document.querySelector(".eur span");
    let btcPrice = document.querySelector(".btc span");

    lbpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["LBP"]);
    eurPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EUR"]);
    btcPrice.innerHTML = amount.innerHTML * currency.rates["BTC"];

    // console.log(currency.rates);
    console.log(currency.rates["LBP"]);
    console.log(currency.rates["EUR"]);
    console.log(currency.rates["BTC"]);
});