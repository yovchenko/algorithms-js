window.onload = function start() {

var itemResult = document.querySelector('.items .item');
var itemsResult = document.getElementsByClassName('items');
itemResult.onmouseover = function sayHello () {
                 alert('me too!');
                 this.classList.toggle('active-item-2');
}
itemsResult[0].onclick = sayHi;

}

function sayHi() {
                  this.classList.toggle('active-item-1');
                  alert('I\'m here!')
}