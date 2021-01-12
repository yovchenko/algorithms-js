//import { interval, Observable } from "rxjs";
//import { take, map } from "rxjs/operators";

// import { of, Observable } from 'rxjs';
// import { map } from "rxjs/operators";

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
  text = text.toLowerCase();
  const obj: { [key: string]: number } = text
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

console.log(maxNumDublicates("Indivisibilitiessssss"));
/*
import { from } from "rxjs";
import { take } from "rxjs/operators";

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));

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
