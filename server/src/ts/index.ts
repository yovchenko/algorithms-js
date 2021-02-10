/*
//import { interval, Observable } from "rxjs";
// import { map } from "rxjs/operators";
import * as _ from "lodash";

const array = [
  { dir: "left", code: 99 },
  { dir: "right", code: 100 },
  { dir: "left", code: 98 }
];

// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

const res = _.keyBy(array, "dir");
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

console.log(res);
*/

/*
function isIsogram(str: T): boolean {
  str = str.toLowerCase();
  const arr = str.split("");
  const len = arr.length;
  for (let x = 0; x < len; x++) {
    const res = str.slice(x + 1, len).includes(arr[x]);
    if (res) return false;
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"));
*/

/*
export function duplicateCount(text: T): number {
  text = text.toLowerCase();
  const len = text.length;
  const strSet = new Set(Array.from(text));
  if (len === strSet.size) return 0;
  let count = 0;
  for (const value of strSet) {
    let flag = false;
    for (let x = 0; x < len; x++) {
      if (value === text[x] && flag) {
        count++;
        break;
      } else if (value === text[x]) flag = true;
    }
  }
  return count;
}

export function maxNumDublicates(text: T): number {
  if (!text.length) return 0;
  const obj: { [key: T]: number } = text
    .toLowerCase()
    .split("")
    .reduce((acc, current) => {
      if (acc[current] === undefined) {
        acc[current] = 0;
      } else acc[current] += 1;
      return acc;
    }, {});
  const arr: number[] = Object.values(obj);
  const num = Math.max(...arr);
  return num ? num + 1 : 0;
}

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: GenericIdentityFn = identity;

console.info(myIdentity("Generic"));

// @strict: false
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
// ---cut---
const TNumeric = new GenericNumber<number>();
TNumeric.zeroValue = 0;
TNumeric.add = function(x, y) {
  return x + y;
};
console.log(TNumeric.add(2, 3));

abstract class Person {
  abstract name: T;

  display(): void {
    console.log(this.name);
  }
  abstract find(T: T): Person;
}

class Employee extends Person {
  name: T;
  empCode: number;

  constructor(name: T, code: number) {
    super(); // must call super()

    this.empCode = code;
    this.name = name;
  }
  display(): void {
    super.display();
    console.log(this.name + " " + this.empCode);
  }
  find(name: T): Person {
    // execute AJAX request to find an employee from a db
    return new Employee(name, 1);
  }
}

const emp: Person = new Employee("James", 100);
emp.display(); //James

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity([1, 2, 3]);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
*/

/*
function* generateDoubles(seed) {
  let i = seed;
  while (true) {
    yield i;
    i = 2 * i; // double it
  }
}

const iterator = generateDoubles(3);
const result = from(iterator).pipe(take(10));

result.subscribe(x => console.log(x));
*/

/*
// RxJS v6+
import { timer } from "rxjs";

//emit 0 after 1 second then complete, since no second argument is supplied
const source = timer(0, 1000);
//output: 0
const subscribe = source.subscribe(val => console.log(val));

const source: Array<number | T> = [1, 2, 3, "1", 0, "3", 20, "5"];
const result = source
  .map((val: number | T) => {
    if (typeof val !== "number") return parseInt(val);
  })
  .filter((val: number | undefined) => {
    if (val !== undefined) return val;
  })
  .reduce<number>((prev, current) => {
    return prev + current;
  }, 0);
console.log(result);

const rxSource: Observable<T | number> = interval(1000)
  .pipe(take(5))
  .pipe(
    map((i: T | number) => {
      return [1, 2, 3, "1", 0, "3", 20, "5"][i];
    })
  );

rxSource.subscribe(val => {
  console.log(val);
});
*/

class Animal<T extends string> {
  private _name;

  constructor(name: T) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value + "!";
  }
}

class Rabbit extends Animal<string> {
  _earLength: number;
  constructor(name: string, earLength: number) {
    super(name);
    this._earLength = earLength;
  }

  get earLength(): number {
    return this._earLength;
  }

  // ...
}

const animal = new Animal("Dog");
console.log(animal.name);
//const rabbit = new Rabbit("White Rabbit", 10);
//console.log(rabbit.name); // White Rabbit
//console.log(rabbit.earLength); // 10
