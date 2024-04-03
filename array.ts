// Features of an array in TS
// the data of same data type is stored in an array
// array elements are always stored in contiguous memory location which means Consecutive blocks of memory allocated to user processes are called contiguous memory. For example, if a user process needs some x bytes of contiguous memory, then all the x bytes will reside in one place in the memory that is defined by a range of memory addresses: 0x0000 to 0x00FF
// Storage of 2-D array elements are rowed by row in a contiguous memory location.
// The Starting element of the address is represented by the array name.
// The size of an array should be declared at the time of initialization.
// The remaining elements of an array can be retrieved by using the starting index of an Array.

// array init in TS
let fruitsName:string[] = ['Apple', 'Banana', 'mango'];
console.log(fruitsName);

for(let x = 0; x<=fruitsName.length-1;x++){
    console.log(fruitsName[x]+"   ops");
};


// example of multi dimensional array\
let friendsName:any[][] = [[1, "bishal"], [2, "suzan"], [3, "myself"]];

// for(let x=0; x<=friendsName.length-1; x++){
//     console.log(friendsName[x]);
// }

for(let x=0; x<=friendsName.length-1; x++){
    for(let y = 0; y<=friendsName[x].length-1; y++){
        console.log(friendsName[x][y]);
    }
}


// array push method
let array1 = [1,2,3];
array1.push(6);

console.log(array1);


// array slice
let array2 = [2,3,4,5,6];
let arraySliced = array2.slice(2,4);
console.log(arraySliced);


// array splice
let array3 = [4,5,6,7,8];
let arraySpliced = array3.splice(2,2,12,13);
console.log(arraySpliced);