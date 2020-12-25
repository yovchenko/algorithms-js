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
