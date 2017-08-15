function fib (num) {
    var result = 0;
    var init = 1;
    var arr = [];
    var idx = 0;
for (var i = 0; i < num; i++) {
    result += init;
    arr.push(result);
    init = arr[idx] - init;
    idx++;
}
arr.forEach(function (el) {
console.log(el);
});
}

fib(9);


function fib (num) {
    const init = 1;
    var result = 0;
    var array = [];
    var a = 0;
    var b = 1;
    while (num !== init) {
        result =  a + b;
        a = b;
        b = result;
        array.push(result);      
        num--;
    }
 array.forEach((function (el,index) {
  console.log(el,index);
 }));  
 return result;
}

console.log(fib(8));