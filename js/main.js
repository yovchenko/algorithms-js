/*function max(array) {
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
console.log(max(example));*/

/* function primeNum(n) {
var i = 2,
  j = false;
  f = Math.trunc(Math.sqrt(n));
for (; i <= f + 1; i++) {
  if (j === false) {
    if (n % i === 0) j = true;
    else if (j === false && i === f + 1) return (console.log(n + ' is prime'));
  }
  else {
      return (console.log((i - 1) + ' ' + n + ' is not prime'));
    }
  }
} 

primeNum(7733) */

class Observable {
  constructor() {
    this.observers = [];
  }
  subscribe(f) {
    this.observers.push(f)
  }
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f)
  }
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const update1 = (value) => console.log(value);
const update2 = (value) => console.log(++value);
const update3 = (value) => console.log(--value);
const numObserver = new Observable;
numObserver.subscribe(update1); 
numObserver.subscribe(update2); 
numObserver.subscribe(update3); 
numObserver.unsubscribe(update3); 
numObserver.notify(1);
