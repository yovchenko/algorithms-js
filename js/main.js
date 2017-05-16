function max(array) {
     array[0] = 'A';
     array[1] = 'B';
     let value = array.length;
     
 if (Number.isInteger(value) === true) {
  return value;
} else   {
  return NaN;
}
}

var  example = [];
var start = max(example);
console.log(max(example));