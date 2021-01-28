/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Product {
  operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class ConcreteProduct1 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct2}";
  }
}

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public abstract factoryMethod(): Product;

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator: Creator): void {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
  // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ConcreteCreator1());
console.log("");

console.log("App: Launched with the ConcreteCreator2.");
clientCode(new ConcreteCreator2());

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
function isIsogram(str: string): boolean {
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
export function duplicateCount(text: string): number {
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

export function maxNumDublicates(text: string): number {
  if (!text.length) return 0;
  const obj: { [key: string]: number } = text
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
const stringNumeric = new GenericNumber<number>();
stringNumeric.zeroValue = 0;
stringNumeric.add = function(x, y) {
  return x + y;
};
console.log(stringNumeric.add(2, 3));

abstract class Person {
  abstract name: string;

  display(): void {
    console.log(this.name);
  }
  abstract find(string: string): Person;
}

class Employee extends Person {
  name: string;
  empCode: number;

  constructor(name: string, code: number) {
    super(); // must call super()

    this.empCode = code;
    this.name = name;
  }
  display(): void {
    super.display();
    console.log(this.name + " " + this.empCode);
  }
  find(name: string): Person {
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

const source: Array<number | string> = [1, 2, 3, "1", 0, "3", 20, "5"];
const result = source
  .map((val: number | string) => {
    if (typeof val !== "number") return parseInt(val);
  })
  .filter((val: number | undefined) => {
    if (val !== undefined) return val;
  })
  .reduce<number>((prev, current) => {
    return prev + current;
  }, 0);
console.log(result);

const rxSource: Observable<string | number> = interval(1000)
  .pipe(take(5))
  .pipe(
    map((i: string | number) => {
      return [1, 2, 3, "1", 0, "3", 20, "5"][i];
    })
  );

rxSource.subscribe(val => {
  console.log(val);
});
*/
