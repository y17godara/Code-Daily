function insertElement( arr, element, index ) {
    arr.splice( index, 0, element );
    return arr;
}

let arr = [ 1, 2, 3, 4, 5 ];
console.log( insertElement( arr, 10, 3 ) ); // [ 1, 2, 3, 10, 5 ]