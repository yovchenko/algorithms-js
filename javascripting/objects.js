/*var arr = ['table','chairs','sofa'];
arr[6] = 'guitar';
arr.push('window');
for (var x =0; x < arr.length ; x++) {
           print(arr[x]);
}


arr.forEach(function (el) {
    print(el);
});


function print (num) {
    console.log(num);
}
*/
var pizza = {
    toppings: ['cheese','sauce','pepperoni'],
    crust: 'deep dish',
    serves: 2,
    liquids : 'cola and beer',
    1 : 'some falue'
};

var counter = 0;
for (var key in pizza) {
    counter++;
    print(counter);
    print (key + ':' + pizza[key]);
    if (counter === 3) {
    pizza['crust'] = 'not deep dish';
    print(key + ':' + pizza[key]);
}
    else {
    pizza['crust'] = 'deep dish';
}
} 

print(pizza);

function print (num) {
    console.log(num);
}
