// Unknown type is used to make our code type-safe. when we use the unknown type we have to write extra code but finally, our code will be type-safe. type safety is nothing but the prevention of type errors.
// unknown cannot be assaigned to any but itself and any.

let try1:unknown; // the output example is same with the any too.
console.log(try1); // this will give the output as undefined.
console.log(typeof(try1));

try1 = true;
console.log(try1);
console.log(typeof(try1));

try1 = "hello";
console.log(try1);
console.log(typeof(try1));