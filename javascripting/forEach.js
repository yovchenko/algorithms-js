function getStock (stocks) {
    let symbols = [],
    counter = 0,
    len = stocks.length,
    stock;

    for(counter = 0; counter < len; counter++) {
        stock = stocks[counter];
        symbols.push(stock.symbol);
    }
    return symbols;
}
let symbols = getStock([
    {symbol: 'aaa',price: 111},
    {symbol: 'bbb',price: 222},
    {symbol: 'ccc',price: 333}
]);
let str = JSON.stringify(symbols);
console.log(typeof(str));