/**
 * 
 * Solving palindrome
 */

// Solution 1 => using reverse()
function palindrome(str) {
    const reversedString = str.split('').reverse().join('');
    return str === reversedString;
}

// Solution 2 => using every(), an array helper
// It returns boolean on using a method to compare each elt in an array
// it compares or doing about twice as much as a normal loop(checkout some sorting algorithm)
function palindrome(str) {
    const arrayStr = str.split('');
    return arrayStr.every((char, index) => char === str[str.length - index - 1]);
}

