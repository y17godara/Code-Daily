// Find the index of an element in a given array
function searchElement( arr, element ) {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] == element ) {
            return i;
        }
    }
    return -1;
}

let arr = [ 1, 2, 3, 4, 5 ];
console.log( searchElement( arr, 4)  ); // 3