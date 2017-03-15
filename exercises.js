//Do not change any of the function names

function getBiggest(x, y) {
    if (x >= y) {
        return x;
    }
    else {
        return y;
    }
}

function greeting(language) {
    switch (language) {
        case 'German':
            return 'Guten Tag!';

        case 'English':
            return 'Hello!';

        case 'Spanish':
            return 'Hola!';

        default:
            return 'Hello!';

    }
}

function isTenOrFive(num) {
    return num === 5 || num === 10;
}

function isInRange(num) {
    return num > 20 && num < 50;
}

function isInteger(num) {
    return num === Math.floor(num);
}

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    }
    return num;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }

}

function returnFirst(arr) {
    return arr[0];
}

function returnLast(arr) {
    return arr.pop();
}

function getArrayLength(arr) {
    return arr.length;
}

function incrementByOne(arr) {
    var newarr;
    newarr = arr.map(addone);
    return newarr;
    function addone(item) {
        return item + 1;
    }
}

function addItemToArray(arr, item) {
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
    return words.join(' ');
}

function contains(arr, item) {
    return arr.indexOf(item) != -1;
}

function addNumbers(numbers) {
    var sum = numbers.reduce(function (prev, curr) {
        return prev + curr;
    });
    return sum;
}

function averageTestScore(testScores) {
    var sum = testScores.reduce(function (prev, curr) {
        return prev + curr;
    });
    return sum / testScores.length;
}

function largestNumber(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers.pop();
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
    getBiggest: getBiggest,
    greeting: greeting,
    isTenOrFive: isTenOrFive,
    isInRange: isInRange,
    isInteger: isInteger,
    fizzBuzz: fizzBuzz,
    isPrime: isPrime,
    returnFirst: returnFirst,
    returnLast: returnLast,
    getArrayLength: getArrayLength,
    incrementByOne: incrementByOne,
    addItemToArray: addItemToArray,
    addItemToFront: addItemToFront,
    wordsToSentence: wordsToSentence,
    contains: contains,
    addNumbers: addNumbers,
    averageTestScore: averageTestScore,
    largestNumber: largestNumber
};
