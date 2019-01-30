/**
 * 
 * Reverse a string "hello"
 */

// Solution 1 => using reverse()
// reverse() is called on an array object, so you need to convert string to an array obj

function reverse (str) {
    return str
        .split('')
        .reverse()
        .join('');
}

// Solution 2 => using for loop
// Avoid the traditional way of writing for loops cos of typos
//instead use for of

function reverse(str) {
    let reversed = ""
    for(char of str) { //char is a temp variable that allows you 
        reversed = char + reversed;
        debugger;
    }

    return reversed;
}

//Solution 3 => using array helper
// reduce is used to condense items in an array into a single string value
// reduce takes two args, an arrow function, and the condensed or accummulated initial value

function reverse2(str) {
    return str.split('').reduce((rev, char) =>  char + rev, ''); // h + '' , e + h, l + eh
}

reverse("hello")

// Setting up a debugger
// node inspect file.js
// If you want to continue the function or execution, type cont or c
// And then type repl to launch repl session where you can type in variables and see their values
// To exit repl mode, contrl + c


