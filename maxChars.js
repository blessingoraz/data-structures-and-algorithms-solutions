/**
 * 
 * Return most frequent char in a string
 */

 // Solution 1 => This can be used for anagram, most common chars, repeated chars
 // for of is used to iterate string or array
 function maxChar(str) {
    let max = 0;
    let maxChar = '';
    const chars = {};

    for(let char of str) {
        chars[char] = chars[char] + 1 || 1;
    }
    
    // iterate over an object
    for(let char in chars) {
        if(chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
 }