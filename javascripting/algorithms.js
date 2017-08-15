var str = 'aaaabbccccc';
var obj = {};
function countSymbols(str) {
var length = str.length;
for (var i = 0; i < length; i++) {
var char = str.charAt(i);
var count = 0;
for (var j = 0; j < length; j++) { 
var currentChar = str.charAt(j);
if (char == currentChar) {
count++;
}
obj[char] = count;
}
}
return obj;
}
console.log(countSymbols(str));