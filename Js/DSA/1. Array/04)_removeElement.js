function removeElement( arr, index ) {
    arr.splice( index, 1 );
    return arr;
}

let arr = [ 1, 2, 3, 4, 5 ];
console.log( removeElement( arr, 3 ) ); // [ 1, 2, 3, 5 ]