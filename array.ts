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
}