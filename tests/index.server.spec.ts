import { duplicateCount } from "../server/src/ts/index";

describe("Count the number of Duplicates", () => {
  `Write a function that will return the count of distinct 
  case-insensitive alphabetic characters and numeric digits 
  that occur more than once in the input string. 
  The input string can be assumed to contain only alphabets 
  (both uppercase and lowercase) and numeric digits.`;
  test("dublicateCount function", () => {
    expect(duplicateCount("")).toBe(0);
    expect(duplicateCount("abcde")).toBe(0);
    expect(duplicateCount("aabbcde")).toBe(2);
    expect(duplicateCount("aabBcde")).toBe(2); // should ignore case
    expect(duplicateCount("Indivisibility")).toBe(1);
    expect(duplicateCount("Indivisibilities")).toBe(2);
  });
});
