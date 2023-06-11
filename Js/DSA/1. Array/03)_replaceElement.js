function replaceElement( arr, element, index ) {
    arr.splice( index, 1, element );
    return arr;
}

let arr = [ 1, 2, 3, 4, 5 ];
console.log( replaceElement( arr, 10, 3 ) ); // [ 1, 2, 3, 10, 5 ]