// Tuples in TypeScript.
// As we know array consists of values of homogeneous (same) types but sometimes when we need to store a collection of a different types values in a single variable, then we will go with Tuples.

let friends = [1, "Bishal", 2, "suzan"];
console.log(friends);

// some basic operation with the tuples.
// Tuple offers basically two operations=>push to insert and pop to delete.

// push operation
console.log(friends.length);
friends.push(10, "ram ram");
console.log(friends.length);
console.log(friends);

// push operation at a index.=> as tuples are immutable we cannot do that.

console.log(friends.pop()); // this gives the output of what is getting pop out.
console.log(friends);
console.log(friends.length);
