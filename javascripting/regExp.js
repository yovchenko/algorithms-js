function incrementString(strng) {
    if (strng === '') {
        return '1';
    } else if (strng.match(/[0-9]/g) === null) {
        return strng + 1;
    } else {
        let y = false,
            z = 0,
            result = '',
            idx = strng.search(/[0-9]/),
            arr = strng.match(/[0-9]/g),
            len = arr.length,
            increment = [];
        for (x = len - 1; x >= 0; x--) {
            increment.unshift(arr[x]);
            if (y === false) {
                if (increment[z] !== '9') {
                    increment[z] = String(parseInt(arr[x]) + 1);
                    y = true;
                } 
                else if (x === 0 && y === false) {
                    increment[z] = '10';
                }
                else {
                    increment[z] = '0';
                }
            }
        }
        result = strng.slice(0, idx) + increment.join('');
        return result;
    }
}
console.log(incrementString("foobar999"));