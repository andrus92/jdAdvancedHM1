/*
    1). Convert Celsius to Fahrenheit
    The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

    You are given a variable celsius representing a temperature in Celsius.
    Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
    Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
 */

function convertCtoF(celsius) {
    return celsius * 9 / 5 + 32;
}

/*
    2). Reverse a String
    Reverse the provided string.
    You may need to turn the string into an array before you can reverse it.
    Your result must be a string.
*/

function reverseString1(str) {
    const len = str.length;
    let newStr = "";
    let i = 0;
    for (i = len - 1; i >= 0; i -= 1) {
        newStr += str[i];
    }
    return newStr;
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}

/* 
    3). Factorialize a Number
    Return the factorial of the provided integer.
    If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
    Factorials are often represented with the shorthand notation n!
    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
    Only integers greater than or equal to zero will be supplied to the function.
*/

function factorial1(num) {
    let res = 1;
    let i = 0;
    for (i = 1; i <= num; i += 1) {
        res *= i;
    }
    return res;
}

function factorial2(num) {
    if (num === 0) {
        return 1;
    }
    return factorial2(num - 1) * num;
}

/*
    4). Find the Longest Word in a String
    Return the length of the longest word in the provided sentence.

    Your response should be a number.
*/

function findLongestWordLength1(str) {
    arr = str.split(' ');
    let len = 0;

    arr.forEach(element => {
        if (len < element.length) {
            len = element.length;
        }
    });

    return len;
}

function findLongestWordLength2(str) {
    return str.split(' ').map(elem => elem.length).reduce((prev, curr) => Math.max(prev, curr), 0);
}

function findLongestWordLength3(str) {
    return Math.max(...str.split(' ').map(elem => elem.length));
}
  
/*
    5). Return Largest Numbers in Arrays
    Return an array consisting of the largest number from each provided sub-array.
    For simplicity, the provided array will contain exactly 4 sub-arrays.

    Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour1(arr) {
    const retArr = [];
    const len = arr.length;
    let i = 0;

    for (i = 0; i < len; i += 1) {
        let j = 0;
        const subArr = arr[i];
        const size = subArr.length;
        let max = subArr[0];
        for (j = 0; j < size; j += 1) {
            if (subArr[j] > max) {
                max = subArr[j];
            }
        }
        retArr.push(max);
    }

    return retArr;
}
  

function largestOfFour2(arr) {
    return arr.map(x => Math.max(...x));
}

/*
    6). Confirm the Ending
    Check if a string (first argument, str) ends with the given target string (second argument, target).

    This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
    But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/


function confirmEnding1(str, target) {
    return str.endsWith(target);
}

function confirmEnding2(str, target) {
    const strLen = str.length;
    const targetLen = target.length;
    return (str.substring(strLen - targetLen, strLen) === target);
}

function confirmEnding3(str, target) {
    const strLen = str.length;
    const targetLen = target.length;
    return (str.slice(strLen - targetLen, strLen) === target);
}

/*
    7). Repeat a String
    Repeat a given string str (first argument) for num times (second argument).
    Return an empty string if num is not a positive number.
    For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes1(str, num) {
    return str.repeat(num);
}

function repeatStringNumTimes2(str, num) {
    if (num <= 0) {
        return "";
    }
    let newString = "";
    let i = 1;
    for (i = 1; i <= num; i += 1) {
        newString = newString.concat(str);
    }
    return newString;
}
  
/*
    8). Truncate a String
    Truncate a string (first argument) if it is longer than the given maximum
    string length (second argument). Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
    const strLen = str.length;
    if (strLen <= num) {
        return str;
    }
    return str.slice(0, num).concat('...');
}
  
/*
    9). Finders Keepers
    Create a function that looks through an array arr and returns the first element
    in it that passes a 'truth test'. This means that given an element x, the 'truth test'
    is passed if func(x) is true. If no element passes the test, return undefined.
*/

function findElement1(arr, func) {
    let num = undefined;
    let i = 0;
    const len = arr.length;
    for (i = 0; i < len; i += 1) {
        if (func(arr[i])) {
            num = arr[i];
            break;
        }
    }
    return num;
}
  

  function findElement2(arr, func) {
    const newArr = arr.filter(func);
    return newArr.length === 0 ? undefined : newArr[0];
  }
  
/* 

10). Boo who
    Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false.
*/
function booWho1(bool) {
    return (bool === true || bool === false) ? true : false;
}

function booWho2(bool) {
    return typeof(bool) === 'boolean';
}
