// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { map } from "rxjs/operators";

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

//console.log(isIsogram("Dermatoglyphics"));

//console.log(isIsogram("isogram"));

//console.log(isIsogram("aba"));

console.log(isIsogram("hpbsOtyqneajmflzrdxcvuwoigk"));

//console.log(isIsogram("isIsogram"));

//console.log(isIsogram(""));
