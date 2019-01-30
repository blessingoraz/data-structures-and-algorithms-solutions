/**
 * 
 * Solution to reverse str(e.g 51, -31, 098)
 */

 // Solution 1 => using Math.sign(int). 
 // It returns either 1 or -1, depending on whether the int is a +ve or -ve number
 function reverseint(num) {
    const reverse = num.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(num);
 }