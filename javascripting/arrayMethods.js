function tripledouble(num1, num2) {
    let x = 0,
        y = 0,
        nextIdx,
        len1 = String(num1).length,
        len2 = String(num2).length,
        result = 0;

    function recursion1(str1) {
        console.log(str1[0] + ' ' + str1[1] + ' ' + str1[2]);
        if (str1[0] === str1[1] && str1[1] === str1[2]) {
            nextIdx = 0;
            do {
                let func = recursion2(String(num2).slice(nextIdx, len2));
                if (func === false) return recursion1(str1.slice(x + 1, len1));
            } while (parseInt(str1[0]) != result);
            return true;
        } else if (str1.length <= 3) return false;
        else {
            return recursion1(str1.slice(x + 1, len1));
        }
    }

    function recursion2(str2) {
        console.log(str2[0] + ' ' + str2[1]);
        if (str2[0] === str2[1]) {
            result = parseInt(str2[1]);
            return nextIdx = len2 - (str2.length - 1);
        } else if (str2.length <= 2) return false;
        else {
            return recursion2(str2.slice(y + 1, len2));
        }
    }

    if (recursion1(String(num1))) return 1;
    else return 0;
}


console.log(tripledouble(451992277,411772299));
console.log(tripledouble(12224533445, 122344335));
console.log(tripledouble(12543345, 123326545));
console.log(tripledouble(666743589, 12345345667));
console.log(tripledouble(10565340002, 124655467500));