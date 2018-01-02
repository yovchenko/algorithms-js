function chooseBestSum(t, k, ls) {
    let x,
        y,
        z,
        i,
        num,
        len = ls.length,
        sum = 0,
        result = 0,
        prevResult = 0,
        temp = [],
        average = Math.trunc(t / k);
    if (len <= (k - 1)) return null;
    else {
        function compareNumbers(a, b) {
            return a - b;
        }

        function reducer(sum, current) {
            return sum + current;
        }
        ls.sort(compareNumbers);
        for (x = 0; x < k; x++) {
            sum += ls[x];
            if (sum > t || average < ls[0]) {
                return null;
            } else if (sum === t) {
                return sum;
            }
        }
        ls.unshift('init');
        for (y = 0; y < (len + 1) - k; y++) {
            num = 0;
            temp = ls.slice(y, k + y);
            for(i = 0; i < k; i++) {   
            for (z = k + y; z < len + 1; z++) {
                temp[num] = ls[z];
                result = temp.reduce(reducer);
                if (result === t) {
                    return result;
                } else if (result > prevResult && result < t) {
                    prevResult = result;
                }
              
            }
            temp[i] = temp[i + 1];
            num++;
          }
        }
        return prevResult;
    }
}
var ts = [34, 44, 50, 56, 56, 64, 68, 73, 76, 89, 89, 100, 123, 123, 132, 144, 2333];
console.log(chooseBestSum(430, 5, ts)); 


