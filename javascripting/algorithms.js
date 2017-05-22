function recursion (num1) {
    if (num1 <= 2) {
        return 1;
    }
    else {
        return recursion(num1 - 2) + recursion(num1-1);
    }
}
console.log(recursion(7));

function result(num2) {
var x = 1;
var y = 2;
var temp;


if (num2 <= 2) {
    return 1;
}
else {
    for (var i = 3; i < num2; i++) {
    temp = x + y;
    x = y;
    y = temp;
    }
    return temp;
}
}
console.log(result(5));
