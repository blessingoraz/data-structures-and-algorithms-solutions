/**
 * 
 * Anagram solution
 */


// Solution 1 => using regExp and maxChars solution

function anagram(string1, string2) {
    const aCharMap = charMap(string1);
    const bCharMap = charMap(string2);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for(char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function charMap(str) {
    const chars = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        chars[char] = chars[char] + 1 || 1;
    }

    return chars;
}

// Solution 2 => Reducing the loop and using a sort() on array of string

function anagram(string1, string2) {
    const aSortedString = sortedStrings(string1);
    const bSortedString = sortedStrings(string2);

    return aSortedString === bSortedString
}

function sortedStrings(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
