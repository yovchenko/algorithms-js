
function numberMatrix() {
var items = [
  [1, 3, 3, 3, 3],
  [2, 1, 3, 3, 3],
  [2, 2, 1, 3, 3],
  [2, 2, 2, 1, 3],
  [2, 2, 2, 2, 1]
];
var y = 0;
while ( y < 5 ) {
  for  (var i = 0; i < 5; i++) {
  document.write(items[y][i]); 
  }
  document.write('<br>');
  y++;
}
}

numberMatrix();


function numberMatrix() {
var items = [
  [1, 3, 3, 3, 3],
  [2, 1, 3, 3, 3],
  [2, 2, 1, 3, 3],
  [2, 2, 2, 1, 3],
  [2, 2, 2, 2, 1]

];
var y = 0;
var par = document.getElementById('it');
while ( y < 5 ) {
  for  (var i = 0; i < 5; i++) {
    par.innerHTML += items[y][i]; 
  }
    par.innerHTML += '<br>';
  y++;
}
}

numberMatrix();

function numberMatrix(rows,columns) {
var arr = new Array();
var count = 0;
var str = '13333';
while (count < columns) {
    arr[count] = new Array();
    for(var i = 0; i < rows; i++) {
    arr[count][i] = Number(str[i]);
    }
    str = str.slice(-1, 1) + '2' + str;
    document.write(arr[count] + '<br>');
    count++; 
}
}

console.log(numberMatrix(5,5));