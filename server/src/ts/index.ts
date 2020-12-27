// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
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
//console.log(duplicateCount("aabbcde"));
*/
const animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

const rabbit = {
  jumps: true,
  __proto__: animal
};

const longEar = {
  earLength: 10,
  __proto__: rabbit
};

const deepCopyFunction = inObject => {
  let value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  const outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};

console.log(Object.getOwnPropertyNames(longEar));
console.log(deepCopyFunction(longEar));
