/**
 * 
 * Grouping elements into inner array
 */

 // Solution 1 => 
 function chunkArray(array, size) {
    const chunked = [];

    for(let element of array) {
        const last = chunked[chunked.length - 1];
        if(!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }
    return chunked;
 }

 // Solution 2 => Using slice on the array
 // slice() makes a copy of some elements in an array, it doesn't mutate the array
 // 
 function chunkArray(array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index+=size
    }
    return chunked;
 }