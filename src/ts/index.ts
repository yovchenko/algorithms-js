// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import * as _ from "lodash";
// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { map } from "rxjs/operators";

const header = document.createElement("header");
header.innerHTML = "Hello Webpack!";
document.body.appendChild(header);

console.log(_);
/*
const observable = new Observable((observer)=>{
    observer.next("Hello world 1");
    observer.next("Hello world 2");
    observer.complete();
    observer.next("Hello world 3");
});

observable.subscribe((str)=>{
  console.log(str);
});
*/

/*
function bounce(ms: number) {
  let flag = true;
  return () => {
    if (flag) {
      flag = false;
      setTimeout(() => {
        console.log("bounce");
        flag = true;
      }, ms);
    }
  };
}

const f = bounce(1000);
f();
f();
*/

/*
let stream = of(1,2,3).pipe(
  map(x => x + '!!!')
) 

stream.subscribe((val) => {
  console.log(val) // 1!!! 2!!! 3!!!
})
*/

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

/*
const isPrime = (num: number) => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
      return num > 1;
}

console.log(isPrime(8));
*/

/*
class Observable {
  private observers: any;

  constructor() {
    this.observers = [];
  }
  subscribe(f: any) {
    this.observers.push(f)
  }
  unsubscribe(f: any) {
    this.observers = this.observers.filter((subscriber: any) => subscriber !== f)
  }
  notify(data: any) {
    this.observers.forEach((observer: any) => observer(data));
  }
}
const update1 = (value: number) => console.log(value);
const update2 = (value: number) => console.log(++value);
const update3 = (value: number) => console.log(--value);
const numObserver = new Observable;
numObserver.subscribe(update1); 
numObserver.subscribe(update2); 
numObserver.subscribe(update3); 
//numObserver.unsubscribe(update3); 
numObserver.notify(1); */
